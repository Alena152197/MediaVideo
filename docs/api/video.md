# Видео (Video)

Карточка ролика на канале: ссылка и провайдер (VK / Rutube), файл не хранится; `status` / `publishedAt`. Кто выложил — через `channel.owner` (`Author`), прямой связи `Video` → `Author` нет.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- title: string, required
- slug: string, required
- description: text, optional
- provider: string, required (`vk` | `rutube`)
- videoUrl: string, required
- externalVideoId: string, optional
- thumbnailUrl: string, optional
- durationSec: integer, optional
- viewsCount: integer, optional
- status: string, required (`draft` | `published` | `archived`)

## Связи
- manyToOne `channel` -> `Channel`
- manyToOne `category` -> `Category`
- oneToMany `comments` -> `Comment`
- oneToMany `reactions` -> `Reaction`
- manyToMany `playlists` -> `Playlist` (via `PlaylistVideo`)
- oneToMany `playlistVideos` -> `PlaylistVideo`
- oneToMany `historyItems` -> `History`
- oneToMany `reports` -> `Report`
- oneToMany `notifications` -> `Notification`
