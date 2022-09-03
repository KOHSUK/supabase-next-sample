import React from 'react';
import { Session } from '@supabase/supabase-js';

type Props = {
  session: Session;
}

export const Dashboard: React.FC<Props> = ({ session }) => {
  return (
    <div>
      <h1>Hello, {session.user?.email}</h1>
      Dashboard
    </div>
  )
}