import { RequestContext } from '../../api/common/request-context';
import { InjectableStrategy } from '../../common/types/injectable-strategy';
import { Order } from '../../entity/order/order.entity';
import { ProductVariant } from '../../entity/product-variant/product-variant.entity';

/**
 * @description
 * Allows additional custom validation logic to run whenever an item is being added to an
 * Order via `addItemToOrder`, in addition to the built-in checks (positive quantity, order
 * state, item/line limits, stock availability).
 *
 * Each registered strategy's `validateAddItemToOrder` method is awaited before the item is
 * added to the Order. To reject the operation, a strategy should `throw` (e.g. a
 * `UserInputError`); the `addItemToOrder` mutation will then fail with that error instead of
 * adding the line.
 *
 * @docsCategory orders
 */
export interface AddItemToOrderValidationStrategy extends InjectableStrategy {
    /**
     * @description
     * Called after the ProductVariant to be added has been resolved, and before it is
     * added to (or its quantity updated on) the Order. Throw to reject the add.
     */
    validateAddItemToOrder(
        ctx: RequestContext,
        order: Order,
        productVariant: ProductVariant,
        quantity: number,
    ): void | Promise<void>;
}
