# Пользователи (User)

Учётная запись (логин, почта, роль); публичное поведение в продукте идёт через связанного автора.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- username: string, required
- email: email, required
- displayName: string, optional
- bio: text, optional
- avatar: media, optional
- role: string, optional
- isBlocked: boolean, optional
- lastSeenAt: datetime, optional

## Связи
- manyToOne `author` -> `Author`
