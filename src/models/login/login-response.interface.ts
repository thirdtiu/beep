export interface LoginResponse {
    result?: {
        email?: string;
        uid?: string;
        user?: {
            email?: string;
        }
    }
    error?: {
        code?: string;
        message?: string;
    }
}