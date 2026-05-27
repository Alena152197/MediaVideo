# Категории (Category)

Тематическая рубрика каталога; у ролика одна категория.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- publishedAt: datetime, optional
- name: string, required
- slug: string, required
- order: integer, optional

## Связи
- oneToMany `videos` -> `Video`
