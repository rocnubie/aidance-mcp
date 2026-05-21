import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "aidance-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for AI Dance (https://aidance.live). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "styles",
    "site://aidance/styles",
    {
      title: "Styles",
      description: "Supported image-generation styles and presets.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Dance — Styles\n\nTurn photos into realistic dance videos with AI motion transfer. Upload a portrait, pick a dance style, and generate viral content for TikTok and Reels in minutes.\n\n## Site basics\n- Site ID: aidance\n- Website: https://aidance.live\n- Default locale: en\n- Locales: en, de, fr, ja, ko\n\n## Public feature scope\n- image gen\n- video gen\n- pricing\n\n## Official website\nhttps://aidance.live",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://aidance/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Dance Pricing\n\nCanonical pricing page: https://aidance.live/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://aidance/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nTurn photos into realistic dance videos with AI motion transfer. Upload a portrait, pick a dance style, and generate viral content for TikTok and Reels in minutes.\n\n## Where can I get help?\nsupport@aidance.live\n\n## Which site is this?\naidance (AI Dance)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://aidance/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://aidance.live\n- Pricing: https://aidance.live/pricing\n- Community: https://discord.gg/HQNnrzjZQS\n- Support: support@aidance.live",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_styles",
    {
      description: "Return the canonical list of image-generation styles or presets the site exposes. (AI Dance)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Dance — Styles\n\nTurn photos into realistic dance videos with AI motion transfer. Upload a portrait, pick a dance style, and generate viral content for TikTok and Reels in minutes.\n\nCanonical website: https://aidance.live" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for AI Dance.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Dance Pricing\n\nOfficial pricing: https://aidance.live/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for AI Dance (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://aidance.live\n- Pricing: https://aidance.live/pricing\n- Community: https://discord.gg/HQNnrzjZQS\n- Support: support@aidance.live" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_aidance",
    {
      description: "Summarize what the site is, who it's for, and how it works. — AI Dance",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what AI Dance (https://aidance.live) is, who it's for, and how it works. Reference the canonical resources at site://aidance/styles and site://aidance/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_image_style_aidance",
    {
      description: "Recommend a starting image-generation style for a stated goal. — AI Dance",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to generate an image with AI Dance (https://aidance.live). Ask me what the subject is, recommend one style preset from site://aidance/styles that fits, and write a prompt I can paste into the site." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
