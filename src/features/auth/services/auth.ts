import { toast } from 'react-toastify'

import {
  LoginArgs,
  LoginResponse,
  ProfileResponse,
  UpdateProfileFormData,
  UserResponse,
} from './types.ts'

import { errorNotification } from '@/common/utils'
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
        try {
          await queryFulfilled
          toast.info('You are successfully logged out', { containerId: 'common' })
        } catch (error) {
          errorNotification(error)
        }
      },
    }),
    updateProfile: builder.mutation<ProfileResponse, UpdateProfileFormData>({
      query: body => ({
        url: `v1/auth/me`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
  }),
})

export const { useGetMeQuery, useLoginMutation, useLogoutMutation, useUpdateProfileMutation } =
  authAPI
