# Плейлисты видео (PlaylistVideo)

Связка «ролик в плейлисте»: порядок и момент добавления.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- position: integer, required
- addedAt: datetime, required

## Связи
- manyToOne `playlist` -> `Playlist`
- manyToOne `video` -> `Video`
