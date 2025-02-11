export interface AdviceState {
    
    advices: string[];
    error?: string;
    status: 'default' | 'loading' | 'success' | 'error'; 
  }
  
  