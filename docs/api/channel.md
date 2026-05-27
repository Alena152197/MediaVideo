# Каналы (Channel)

Страница канала: владелец-автор, ролики, плейлисты и подписки аудитории.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- title: string, required
- slug: string, required
- description: text, optional
- avatar: media, optional
- cover: media, optional

## Связи
- manyToOne `owner` -> `Author`
- oneToMany `videos` -> `Video`
- oneToMany `playlists` -> `Playlist`
- oneToMany `subscriptions` -> `Subscription`
- oneToMany `notifications` -> `Notification`
