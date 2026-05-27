# Плейлисты (Playlist)

Набор роликов на канале; плейлист всегда привязан к каналу, без канала плейлиста нет.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- title: string, required
- slug: string, required
- description: text, optional
- visibility: string, required

## Связи
- manyToOne `channel` -> `Channel`
- manyToMany `videos` -> `Video` (via `PlaylistVideo`)
- oneToMany `items` -> `PlaylistVideo`
