# Уведомления (Notification)

События для автора-получателя; заголовок на клиенте по `type` и связям.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- type: enumeration, required (`new_video` | `new_comment`)
- isRead: boolean, optional
- readAt: datetime, optional

## Связи
- manyToOne `author` -> `Author`
- manyToOne `channel` -> `Channel`, optional — при `new_comment` можно не хранить, если берёте канал с `video.channel`
- manyToOne `video` -> `Video`
- manyToOne `comment` -> `Comment`, optional — только при `type` = `new_comment`
