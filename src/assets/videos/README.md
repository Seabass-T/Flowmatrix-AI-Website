# Video Assets

Place the following video files in this directory:

| Filename | Section | Duration | Aspect |
|----------|---------|----------|--------|
| hero-awakening.mp4 | Hero | 8-12s loop | 16:9 |
| stakes-transfer.mp4 | Stakes | 6-8s loop | 16:9 |
| pillar-discover.mp4 | Pillars | 4-6s loop | 1:1 |
| pillar-build.mp4 | Pillars | 4-6s loop | 1:1 |
| pillar-scale.mp4 | Pillars | 4-6s loop | 1:1 |
| proof-gallery.mp4 | Proof | 8s loop | 16:9 |
| founders-stewards.mp4 | Founders | 6-8s loop | 1:1 |
| cta-invitation.mp4 | CTA | 8s loop | 16:9 |
| loading-emergence.mp4 | Loading | 3-4s | 1:1 |

## Export Settings

- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 (16:9) or 1080x1080 (1:1)
- **Frame rate:** 24fps
- **Quality:** High (but compressed for web - aim for <5MB per file)

## Temporary Fallbacks

Until videos are ready, the VideoBackground component will display
a black background. No fallback images required.

## Placement Options

Videos can be placed in either:
- `src/assets/videos/` (for smaller files bundled with app)
- `public/videos/` (for larger files served as static assets)

The VideoBackground component references `/videos/filename.mp4`, which points to the public folder.
