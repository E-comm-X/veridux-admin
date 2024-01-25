import { authApi } from "@/services/auth.service"
import { categoryApi } from "@/services/category.service"
import { documentsApi } from "@/services/documents.service"
import { productApi } from "@/services/product.service"
import { profileApi } from "@/services/profile.service"
import { storeApi } from "@/services/store.service"
import { userGroupApi } from "@/services/usergroup.service"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [storeApi.reducerPath]: storeApi.reducer,
    [userGroupApi.reducerPath]: userGroupApi.reducer,
    [documentsApi.reducerPath]: documentsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      categoryApi.middleware,
      storeApi.middleware,
      userGroupApi.middleware,
      documentsApi.middleware,
      productApi.middleware
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
