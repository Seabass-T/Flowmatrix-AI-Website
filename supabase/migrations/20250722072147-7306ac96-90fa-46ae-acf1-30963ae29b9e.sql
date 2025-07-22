-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Allow read for authenticated users" ON public.final_newsletters;

-- Create a new policy that allows public read access
CREATE POLICY "Allow public read access to newsletters" 
ON public.final_newsletters 
FOR SELECT 
USING (true);