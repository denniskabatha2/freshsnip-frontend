export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_date: string
          booking_status: string
          created_at: string | null
          id: string
          payment_status: string
          schedule_id: string
          seats: string[]
          total_fare: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          booking_date: string
          booking_status: string
          created_at?: string | null
          id?: string
          payment_status: string
          schedule_id: string
          seats: string[]
          total_fare: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          booking_date?: string
          booking_status?: string
          created_at?: string | null
          id?: string
          payment_status?: string
          schedule_id?: string
          seats?: string[]
          total_fare?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_schedule_id_fkey"
            columns: ["schedule_id"]
            isOneToOne: false
            referencedRelation: "schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      bus_operators: {
        Row: {
          address: string
          contact: string
          created_at: string | null
          email: string
          id: string
          logo_url: string | null
          name: string
          rating: number | null
          updated_at: string | null
        }
        Insert: {
          address: string
          contact: string
          created_at?: string | null
          email: string
          id?: string
          logo_url?: string | null
          name: string
          rating?: number | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          contact?: string
          created_at?: string | null
          email?: string
          id?: string
          logo_url?: string | null
          name?: string
          rating?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      buses: {
        Row: {
          amenities: string[] | null
          bus_number: string
          created_at: string | null
          id: string
          name: string
          operator_id: string
          total_seats: number
          type: string
          updated_at: string | null
        }
        Insert: {
          amenities?: string[] | null
          bus_number: string
          created_at?: string | null
          id?: string
          name: string
          operator_id: string
          total_seats: number
          type: string
          updated_at?: string | null
        }
        Update: {
          amenities?: string[] | null
          bus_number?: string
          created_at?: string | null
          id?: string
          name?: string
          operator_id?: string
          total_seats?: number
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buses_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "bus_operators"
            referencedColumns: ["id"]
          },
        ]
      }
      locations: {
        Row: {
          country: string
          created_at: string | null
          id: string
          name: string
          state: string
          updated_at: string | null
        }
        Insert: {
          country?: string
          created_at?: string | null
          id?: string
          name: string
          state: string
          updated_at?: string | null
        }
        Update: {
          country?: string
          created_at?: string | null
          id?: string
          name?: string
          state?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          booking_id: string
          created_at: string | null
          id: string
          payment_method: string
          status: string
          transaction_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          booking_id: string
          created_at?: string | null
          id?: string
          payment_method: string
          status: string
          transaction_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          booking_id?: string
          created_at?: string | null
          id?: string
          payment_method?: string
          status?: string
          transaction_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          first_name: string
          id: string
          last_name: string
          phone: string | null
          role: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name: string
          id: string
          last_name: string
          phone?: string | null
          role: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          bus_id: string
          comment: string | null
          created_at: string | null
          id: string
          rating: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          bus_id: string
          comment?: string | null
          created_at?: string | null
          id?: string
          rating: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          bus_id?: string
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_bus_id_fkey"
            columns: ["bus_id"]
            isOneToOne: false
            referencedRelation: "buses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      routes: {
        Row: {
          created_at: string | null
          destination: string
          distance: number
          duration: number
          id: string
          origin: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          destination: string
          distance: number
          duration: number
          id?: string
          origin: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          destination?: string
          distance?: number
          duration?: number
          id?: string
          origin?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      schedules: {
        Row: {
          arrival_time: string
          available_seats: number
          bus_id: string
          created_at: string | null
          departure_time: string
          fare: number
          id: string
          route_id: string
          updated_at: string | null
        }
        Insert: {
          arrival_time: string
          available_seats: number
          bus_id: string
          created_at?: string | null
          departure_time: string
          fare: number
          id?: string
          route_id: string
          updated_at?: string | null
        }
        Update: {
          arrival_time?: string
          available_seats?: number
          bus_id?: string
          created_at?: string | null
          departure_time?: string
          fare?: number
          id?: string
          route_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedules_bus_id_fkey"
            columns: ["bus_id"]
            isOneToOne: false
            referencedRelation: "buses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "routes"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
