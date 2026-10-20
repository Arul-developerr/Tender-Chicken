import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  { ignores: ['dist/**', 'src/components/GlareHover.tsx', 'src/components/Magnet.tsx', 'src/components/Noise.tsx', 'src/components/ShinyText.tsx', 'src/components/ScrollExpand.tsx'] },
  ...tseslint.configs.recommended,
  { files: ['src/**/*.{ts,tsx}'], plugins: { 'react-hooks': reactHooks }, rules: { ...reactHooks.configs.recommended.rules } },
);
