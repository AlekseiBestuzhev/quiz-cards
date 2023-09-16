export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type LoginResponse = {
  accessToken: string
}

export type UserResponse = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}
