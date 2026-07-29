import { afterEach, expect, mock, test } from "bun:test";

mock.module("next/cache", () => ({
  unstable_cache: <T extends (...args: never[]) => unknown>(callback: T) =>
    callback,
}));

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("does not return page data when a GitHub directory request fails", async () => {
  globalThis.fetch = mock(async (...args: Parameters<typeof fetch>) => {
    const url = args[0].toString();

    if (url.includes("/contents/docs/tags?")) {
      return Response.json([
        { type: "file", name: "good.md", path: "docs/tags/good.md" },
        { type: "dir", name: "nested", path: "docs/tags/nested" },
      ]);
    }

    if (url.includes("/contents/docs/tags/nested?")) {
      return new Response(null, { status: 503 });
    }

    if (url.includes("/contents/docs/examples?")) {
      return Response.json([
        {
          type: "file",
          name: "example.md",
          path: "docs/examples/example.md",
        },
      ]);
    }

    throw new Error(`Unexpected request: ${url}`);
  }) as unknown as typeof fetch;

  const { getPageMap } = await import("./page");

  await expect(getPageMap()).rejects.toThrow(
    "Failed to fetch GitHub directory entries",
  );
});
