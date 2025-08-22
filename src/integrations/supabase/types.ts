export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      agendamentos: {
        Row: {
          created_at: string
          data_agendamento: string
          delegacia_id: string
          id: string
          observacoes: string | null
          ocorrencia_id: string | null
          prioridade: number | null
          reagendamento_original_id: string | null
          status_agendamento:
            | Database["public"]["Enums"]["status_agendamento"]
            | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data_agendamento: string
          delegacia_id: string
          id?: string
          observacoes?: string | null
          ocorrencia_id?: string | null
          prioridade?: number | null
          reagendamento_original_id?: string | null
          status_agendamento?:
            | Database["public"]["Enums"]["status_agendamento"]
            | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data_agendamento?: string
          delegacia_id?: string
          id?: string
          observacoes?: string | null
          ocorrencia_id?: string | null
          prioridade?: number | null
          reagendamento_original_id?: string | null
          status_agendamento?:
            | Database["public"]["Enums"]["status_agendamento"]
            | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agendamentos_delegacia_id_fkey"
            columns: ["delegacia_id"]
            isOneToOne: false
            referencedRelation: "delegacia"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agendamentos_ocorrencia_id_fkey"
            columns: ["ocorrencia_id"]
            isOneToOne: false
            referencedRelation: "ocorrencias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agendamentos_reagendamento_original_id_fkey"
            columns: ["reagendamento_original_id"]
            isOneToOne: false
            referencedRelation: "agendamentos"
            referencedColumns: ["id"]
          },
        ]
      }
      delegacia: {
        Row: {
          created_at: string | null
          email: string | null
          endereco: string | null
          especialidades: string[] | null
          horario_funcionamento: string | null
          id: string
          latitude: number | null
          longitude: number | null
          name: string
          telefone: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          endereco?: string | null
          especialidades?: string[] | null
          horario_funcionamento?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name: string
          telefone?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          endereco?: string | null
          especialidades?: string[] | null
          horario_funcionamento?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name?: string
          telefone?: string | null
        }
        Relationships: []
      }
      evidencias: {
        Row: {
          created_at: string
          descricao: string | null
          id: string
          nome_arquivo: string
          ocorrencia_id: string
          tipo_arquivo: string
          url_arquivo: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          id?: string
          nome_arquivo: string
          ocorrencia_id: string
          tipo_arquivo: string
          url_arquivo: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          id?: string
          nome_arquivo?: string
          ocorrencia_id?: string
          tipo_arquivo?: string
          url_arquivo?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidencias_ocorrencia_id_fkey"
            columns: ["ocorrencia_id"]
            isOneToOne: false
            referencedRelation: "ocorrencias"
            referencedColumns: ["id"]
          },
        ]
      }
      fila_virtual: {
        Row: {
          agendamento_id: string
          atendimento_finalizado_em: string | null
          atendimento_iniciado_em: string | null
          chamado_em: string | null
          created_at: string
          delegacia_id: string
          id: string
          posicao_fila: number
          status_fila: Database["public"]["Enums"]["status_fila"] | null
          tempo_estimado_minutos: number | null
          updated_at: string
        }
        Insert: {
          agendamento_id: string
          atendimento_finalizado_em?: string | null
          atendimento_iniciado_em?: string | null
          chamado_em?: string | null
          created_at?: string
          delegacia_id: string
          id?: string
          posicao_fila: number
          status_fila?: Database["public"]["Enums"]["status_fila"] | null
          tempo_estimado_minutos?: number | null
          updated_at?: string
        }
        Update: {
          agendamento_id?: string
          atendimento_finalizado_em?: string | null
          atendimento_iniciado_em?: string | null
          chamado_em?: string | null
          created_at?: string
          delegacia_id?: string
          id?: string
          posicao_fila?: number
          status_fila?: Database["public"]["Enums"]["status_fila"] | null
          tempo_estimado_minutos?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fila_virtual_agendamento_id_fkey"
            columns: ["agendamento_id"]
            isOneToOne: true
            referencedRelation: "agendamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fila_virtual_delegacia_id_fkey"
            columns: ["delegacia_id"]
            isOneToOne: false
            referencedRelation: "delegacia"
            referencedColumns: ["id"]
          },
        ]
      }
      mensagens_chat: {
        Row: {
          agendamento_id: string
          created_at: string
          id: string
          lida: boolean
          mensagem: string
          tipo_remetente: string
          updated_at: string
          user_id: string
        }
        Insert: {
          agendamento_id: string
          created_at?: string
          id?: string
          lida?: boolean
          mensagem: string
          tipo_remetente: string
          updated_at?: string
          user_id: string
        }
        Update: {
          agendamento_id?: string
          created_at?: string
          id?: string
          lida?: boolean
          mensagem?: string
          tipo_remetente?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ocorrencias: {
        Row: {
          created_at: string
          data_ocorrencia: string | null
          delegacia_id: string | null
          descricao: string
          id: string
          local_ocorrencia: string | null
          numero_protocolo: string | null
          status: string | null
          tipo_ocorrencia: Database["public"]["Enums"]["tipo_ocorrencia"]
          titulo: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data_ocorrencia?: string | null
          delegacia_id?: string | null
          descricao: string
          id?: string
          local_ocorrencia?: string | null
          numero_protocolo?: string | null
          status?: string | null
          tipo_ocorrencia: Database["public"]["Enums"]["tipo_ocorrencia"]
          titulo: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data_ocorrencia?: string | null
          delegacia_id?: string | null
          descricao?: string
          id?: string
          local_ocorrencia?: string | null
          numero_protocolo?: string | null
          status?: string | null
          tipo_ocorrencia?: Database["public"]["Enums"]["tipo_ocorrencia"]
          titulo?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ocorrencias_delegacia_id_fkey"
            columns: ["delegacia_id"]
            isOneToOne: false
            referencedRelation: "delegacia"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          cep: string | null
          cidade: string | null
          cpf: string
          created_at: string
          data_nascimento: string | null
          documento_tipo: string | null
          documento_verificado: boolean | null
          email: string | null
          endereco: string | null
          estado: string | null
          id: string
          nome_completo: string
          telefone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cep?: string | null
          cidade?: string | null
          cpf: string
          created_at?: string
          data_nascimento?: string | null
          documento_tipo?: string | null
          documento_verificado?: boolean | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          id?: string
          nome_completo: string
          telefone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cep?: string | null
          cidade?: string | null
          cpf?: string
          created_at?: string
          data_nascimento?: string | null
          documento_tipo?: string | null
          documento_verificado?: boolean | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          id?: string
          nome_completo?: string
          telefone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_delegacias_publicas: {
        Args: Record<PropertyKey, never>
        Returns: {
          endereco: string
          especialidades: string[]
          horario_funcionamento: string
          id: string
          latitude: number
          longitude: number
          name: string
        }[]
      }
      validate_cpf: {
        Args: { cpf_input: string }
        Returns: boolean
      }
    }
    Enums: {
      status_agendamento:
        | "agendado"
        | "confirmado"
        | "cancelado"
        | "reagendado"
        | "finalizado"
      status_fila:
        | "aguardando"
        | "chamando"
        | "atendendo"
        | "finalizado"
        | "reagendado"
      tipo_ocorrencia:
        | "furto"
        | "roubo"
        | "acidente_transito"
        | "violencia_domestica"
        | "desaparecimento"
        | "documentos"
        | "outros"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      status_agendamento: [
        "agendado",
        "confirmado",
        "cancelado",
        "reagendado",
        "finalizado",
      ],
      status_fila: [
        "aguardando",
        "chamando",
        "atendendo",
        "finalizado",
        "reagendado",
      ],
      tipo_ocorrencia: [
        "furto",
        "roubo",
        "acidente_transito",
        "violencia_domestica",
        "desaparecimento",
        "documentos",
        "outros",
      ],
    },
  },
} as const
