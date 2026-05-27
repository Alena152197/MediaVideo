# Города (City)

Справочник городов (РФ); для привязки к авторам и субъекту через `region`.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- name: string, required
- slug: string, required
- region: string, optional

## Связи
- oneToMany `authors` -> `Author`
