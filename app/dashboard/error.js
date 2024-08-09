"use client";

import { createUser } from "@/app/actions";
import { useActionState } from "react";

const initialState = {
    message: "",
};

export function Signup() {
    const [state, formAction] = useActionState(createUser, initialState);

    return (
        <form action={formAction}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
            {/* ... */}
            <p aria-live="polite">{state?.message}</p>
            <button>Sign up</button>
        </form>
    );
}

// project structured form

// <RootLayout>
//     <Suspense fallback={<DashboardLoding/>}>
//     <DashboardLayout>
//          <ErrorBoundary>
//         <Dashboard/>
//     </DashboardLayout>
//           </ErrorBoundary>
//     </Suspense>
// </RootLayout>
