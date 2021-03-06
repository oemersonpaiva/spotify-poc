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
  country?: string
  locale?: string
  timestamp?: string
  limit?: number
  offset?: number
}

export type PlaylistParamsIndex = PlaylistParams & {
  [key: string]: string | number | undefined
}

export type Playlists = {
  limit: number
  next?: string
  offset: number
  previous?: string
  total: number
  href?: string
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
