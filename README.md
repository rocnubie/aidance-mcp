# AI Dance MCP

A minimal, read-only MCP for AI Dance.

This package is generated from the MSA multi-site system and is built for one very specific job:
- provide a real MCP that can be installed and indexed
- keep the setup simple with local `stdio`
- avoid backend integration and API quota costs
- send users back to the official AI Dance website

Official website: https://aidance.live

## About AI Dance

AI Dance Live ([aidance.live](https://aidance.live)) is a web-based tool that turns static portrait photos into animated dance videos using AI motion transfer. Users upload a photo of a person, pet, or illustrated character, choose a dance style from a built-in choreography library or provide their own reference clip, and the platform generates a finished video — typically within minutes. The underlying models handle skeletal mapping, motion choreography extraction, and audio synchronization, producing output that keeps the subject's face and appearance consistent throughout the animation. Videos are exported in MP4 format at 720p or 1080p resolution, in clips up to 30 seconds long.

## Key Features

- **Motion library with multiple dance styles** — pre-loaded choreographies including hip-hop, K-pop, salsa, ballet, folk dances, and trending short-form routines, selectable without any technical setup.
- **Custom reference video upload** — users can supply their own dance clip as the motion source, giving full control over the choreography.
- **Face preservation** — the generation pipeline maintains the subject's facial identity and appearance frame-by-frame rather than drifting over time.
- **Audio synchronization** — generated dance animation is matched to the original audio track of the chosen choreography or uploaded reference.
- **Video extension and upscaling** — additional post-generation tools allow lengthening the clip or increasing output resolution beyond the default.
- **Powered by Kling Motion Control and Wan Animate models** — the platform uses established video generation models focused on motion precision rather than general-purpose image animation.

## Use Cases

- **Short-form social content** — creating TikTok videos, Instagram Reels, or YouTube Shorts where a still photo is animated to match a trending dance or audio clip.
- **Brand and mascot animation** — turning a company mascot, illustrated character, or product spokesperson photo into a dancing promotional clip without a production team.
- **E-commerce and product marketing** — animating product models or lifestyle photos to make catalog content more dynamic for ads and landing pages.
- **Personal and family entertainment** — making novelty videos from photos of babies, pets, or family members dancing to a favorite song.
- **Content creators without dance skills** — producing dance-format content for channels or accounts where the creator cannot or prefers not to appear on camera performing.

## Who Is It For

AI Dance Live is aimed at social media creators, digital marketers, and small business owners who want to produce animated video content without filming, choreographing, or editing expertise. The tool requires no prior video production knowledge — the workflow is upload, select, generate, download. It suits individuals who need a fast turnaround on short-form video for platforms like TikTok and Instagram, as well as brand teams looking for a lightweight way to animate existing photo assets for campaigns. Anyone who regularly works with portrait images and wants to add motion to them for entertainment or marketing purposes will find the site's focused toolset practical.

## Core Site Functions

- Image generation and editing workflows for prompts, references, and visual iteration.
- Video generation workflows for text-to-video, image-to-video, and creative motion tasks.
- Public pricing and plan information that helps users compare offers before they sign up.

## Why This Site Is Good

- The MCP points users to the official AI Dance website instead of a third-party landing page.
- It keeps the package lightweight and easy to install because everything is static and read-only.
- It gives AI clients canonical links for docs, pricing, and support in one place.
- Useful when users want fast visual output without switching between multiple tools.
- Useful when users want one entry point for video creation instead of stitching together separate services.
- Useful when users want a quick path from product discovery to plan evaluation.

## Official Links

- Website: https://aidance.live
- Docs: https://aidance.live/docs
- Pricing: https://aidance.live/pricing
- Contact: https://discord.gg/HQNnrzjZQS
- Support: support@aidance.live

## Site Metadata

- Site ID: aidance
- Site Name: AI Dance
- Default language: en
- Available languages: en, de, fr, ja, ko
- Feature tags: `image-gen`, `video-gen`, `pricing`

## MCP Resources

- `site://meta`
- `site://pages/overview`
- `site://pages/pricing`
- `site://pages/faq`
- `site://pages/links`

## Why This MCP Is Useful

- It is a real MCP package, not just a README-only repository.
- It is lightweight enough for quick indexing and easy local installation.
- It gives AI clients structured access to official website context and links.
- It is simple to fork, publish, and maintain for directory submissions.

## Quick Start

Install dependencies:

```bash
pnpm install
```

Run the server:

```bash
pnpm start
```

Run tests:

```bash
pnpm test
```

## Claude Desktop Example

```json
{
  "mcpServers": {
    "aidance": {
      "command": "pnpm",
      "args": [
        "--dir",
        "/absolute/path/to/exports/aidance",
        "start"
      ]
    }
  }
}
```

## Directory Submission Notes

- Repo type: local `stdio` MCP
- Maintenance model: generated from the MSA multi-site source
- Primary goal: directory indexing, official link discovery, and lightweight client install
