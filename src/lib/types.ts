export interface Artist {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  bio?: string;
  languages?: string[];
  image?: string;
}

export interface ArtistFormData {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
  profileImage?: FileList;
}