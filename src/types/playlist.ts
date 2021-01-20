export type Playlist = {
  id: string
  description?: string
  external_urls: {
    spotify: string
  }
  images: {
    url: string
  }[]
  name: string
  primary_color?: string
}

export type PlaylistParams = {
  country: string
  locale: string
  timestamp: string
  limit: number
  offset: string
}

export type Playlists = {
  limit?: number
  next?: number
  offset?: number
  previous?: number
  total?: number
  items: Playlist[]
}

export type PrimitiveType = 'STRING' | 'INTEGER'

export type PlaylistFilter = {
  id: string
  name: string
  values?: {
    name: string
    value: string
  }[]
  validation: {
    entityType?: string
    pattern?: string
    primitiveType: PrimitiveType
    max?: number
    min?: number
  }
}
