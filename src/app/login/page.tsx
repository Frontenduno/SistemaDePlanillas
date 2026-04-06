// src/app/login/page.tsx
'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // NUEVO: Estado para el rol
  const [role, setRole] = useState<'hr' | 'contador'>('hr');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Ingresa tu correo y contraseña.');
      return;
    }

    // NUEVO: Guardamos el rol en localStorage simulando una sesión
    localStorage.setItem('userRole', role);
    console.log('Login attempt:', { email, role, rememberMe });
    
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#120E39] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="bg-[#0C02A3] rounded-lg shadow-2xl p-8 border-0 min-h-screen flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-center">
            {/* Logo */}
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold text-white tracking-wider mb-2">J&P</h1>
              <p className="text-white text-sm tracking-widest opacity-80">PERIFÉRICOS S.A.C</p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              
              {/* NUEVO: Selector de Rol para pruebas */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Ingresar como:
                </label>
                <select 
                  value={role} 
                  onChange={(e) => setRole(e.target.value as 'hr' | 'contador')}
                  className="w-full bg-white/90 text-gray-800 rounded-md h-9 px-3 outline-none"
                >
                  <option value="hr">Recursos Humanos</option>
                  <option value="contador">Contador</option>
                </select>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Correo Electrónico:</label>
                <Input
                  type="email"
                  placeholder="usuario@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Contraseña:</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Ingresar su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(Boolean(checked))}
                    className="border-white data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                  />
                  <label htmlFor="remember" className="text-white text-sm cursor-pointer">
                    Recordarme:
                  </label>
                </div>
                <a href="#" className="text-white text-sm hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              {error && <p className="text-red-100 bg-red-500/40 border border-red-300 text-sm rounded-md px-3 py-2">{error}</p>}

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 rounded-md transition-colors mt-4"
              >
                Iniciar Sesión
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}