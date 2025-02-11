export interface AdviceState {
    
    advices: string[];
    error: string | null;
    status: 'idle' | 'loading' | 'success' | 'error'; 
  }
  
  