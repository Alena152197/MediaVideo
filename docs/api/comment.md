# Комментарии (Comment)

Комментарий автора под роликом; ответы — через связь `parent` / `replies` на тот же тип.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- content: text, required
- isEdited: boolean, optional
- isPinned: boolean, optional

## Связи
- manyToOne `author` -> `Author`
- manyToOne `video` -> `Video`
- manyToOne `parent` -> `Comment`
- oneToMany `replies` -> `Comment`
- oneToMany `reactions` -> `Reaction`
- oneToMany `reports` -> `Report`
- oneToMany `notifications` -> `Notification`
