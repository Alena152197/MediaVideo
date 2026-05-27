# История (History)

История просмотров роликов автором: когда смотрел, прогресс и признак досмотра.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- watchedAt: datetime, required
- watchProgressSec: integer, optional
- completed: boolean, optional

## Связи
- manyToOne `author` -> `Author`
- manyToOne `video` -> `Video`
