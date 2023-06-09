// apollo
import { InMemoryCache } from '@apollo/client';

// export cache
export const cache = new InMemoryCache({
  typePolicies: {
    Subscription: {
      fields: {
        // company_users: {
        //   merge: (_, incoming) => incoming,
        // },
        // clients: {
        //   merge: (_, incoming) => incoming,
        // },
        // products: {
        //   merge: (_, incoming) => incoming,
        // },
        // invoices: {
        //   merge: (_, incoming) => incoming,
        // },
        // invoice_products: {
        //   merge: (_, incoming) => incoming,
        // },
      },
    },
  },
});
