import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fileSchema, stringSchema } from '@/common/utils'

const packSchema = z.object({
  name: stringSchema,
  isPrivate: z.boolean(),
  cover: fileSchema,
})

export type PackFormType = z.infer<typeof packSchema>

export const usePackForm = (props: PackFormType) => {
  return useForm<PackFormType>({
    resolver: zodResolver(packSchema),
    defaultValues: props,
  })
}
