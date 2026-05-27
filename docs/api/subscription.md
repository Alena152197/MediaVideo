# Подписки (Subscription)

Подписка автора на канал; флаг включает или выключает уведомления о новых роликах с этого канала.

## Поля
- id: integer, required
- documentId: string, required
- createdAt: datetime, required
- updatedAt: datetime, required
- notificationsEnabled: boolean, optional — уведомления о новых роликах с этого канала (см. `Notification`)

## Связи
- manyToOne `subscriber` -> `Author`
- manyToOne `channel` -> `Channel`
