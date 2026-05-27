# Реакции (Reaction)

Реакция автора к ролику и/или комментарию (тип задаётся полем `type`).

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- type: string, required

## Связи
- manyToOne `author` -> `Author`
- manyToOne `video` -> `Video`, optional — если реакция к ролику
- manyToOne `comment` -> `Comment`, optional — если реакция к комментарию  
  (ровно одно из `video` / `comment` должно быть задано)
