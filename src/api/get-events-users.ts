import { api } from '../services/axios'

interface GetEventsUsersRequest {
  usersId: string
}

interface GetEventsUserResponse {
  events: {
    date: Date
    id: string
    title: string
    description: string
    createdAt: Date
    usersId: string | null
    guests: {}[]
  }[]
}

export async function getEventsUsers({ usersId }: GetEventsUsersRequest) {
  const response = await api.get<GetEventsUserResponse>(
    `events-users/${usersId}`
  )

  return response.data
}
