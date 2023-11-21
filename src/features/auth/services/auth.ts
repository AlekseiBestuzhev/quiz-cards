import { toast } from 'react-toastify'

import {
  LoginArgs,
  LoginResponse,
  RecoverPasswordRequest,
  SignUpArgs,
  UpdateProfileFormData,
  UserResponse,
} from './types.ts'

import { requestHandler } from '@/common/utils'
import { baseAPI } from '@/services/base-api.ts'

const authAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<UserResponse | null | { success: boolean }, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `v1/auth/me`,
          method: 'GET',
        })

        if (result.error) {
          return { data: { success: false } }
        }

        return { data: result.data } as { data: UserResponse }
      },
      extraOptions: {
        maxRetries: 0,
      },
      providesTags: ['Me'],
    }),
    login: builder.mutation<LoginResponse, LoginArgs>({
      query: data => ({
        url: `v1/auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Me'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `v1/auth/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Me'],
      async onQueryStarted(_, { queryFulfilled }) {
        await requestHandler(async () => {
          await queryFulfilled
          toast.info('You are successfully logged out', { containerId: 'common' })
        })
      },
    }),
    updateProfile: builder.mutation<UserResponse, UpdateProfileFormData>({
      query: body => ({
        url: `v1/auth/me`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<UserResponse, SignUpArgs>({
      query: body => ({
        url: `v1/auth/sign-up`,
        method: 'POST',
        body,
      }),
    }),
    recoverPassword: builder.mutation<void, RecoverPasswordRequest>({
      query: body => ({
        url: 'v1/auth/recover-password',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<void, { token: string; password: string }>({
      query: ({ token, password }) => ({
        url: `v1/auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useUpdateProfileMutation,
  useSignUpMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authAPI
