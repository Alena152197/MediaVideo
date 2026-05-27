# Авторы (Author)

Публичный профиль (имя, пол, дата рождения); ролики только на своих каналах, не напрямую у автора — каналы, комментарии, реакции и т.д.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- firstName: string, required
- lastName: string, required
- dateOfBirth: date, optional
- gender: string, optional (`male` | `female`)

## Связи
- manyToOne `city` -> `City`, optional
- oneToMany `channels` -> `Channel`
- oneToMany `comments` -> `Comment`
- oneToMany `reactions` -> `Reaction`
- oneToMany `subscriptions` -> `Subscription`
- oneToMany `historyItems` -> `History`
- oneToMany `notifications` -> `Notification`
- oneToMany `reports` -> `Report`
- oneToMany `users` -> `User`