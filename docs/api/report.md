# Жалоба (Report)

Жалоба автора на ролик или комментарий: причина, статус и время рассмотрения.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- reason: string, required
- details: text, optional
- status: string, required
- reviewedAt: datetime, optional

## Связи
- manyToOne `author` -> `Author`
- manyToOne `video` -> `Video`, optional — жалоба на ролик
- manyToOne `comment` -> `Comment`, optional — жалоба на комментарий  
  (ровно одно из `video` / `comment` должно быть задано)
