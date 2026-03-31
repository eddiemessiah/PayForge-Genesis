# World App Mini-App Integration Plan for ZamaPay

To deploy ZamaPay directly inside the World App as a Mini-App, we will utilize the **World App MiniKit**. This allows remote DAO contributors to access their confidential payroll seamlessly via their World App wallet, while ensuring Sybil resistance (1-person-1-salary).

## Why World App?
1. **Sybil Resistance:** By integrating `Verify with World ID`, DAOs can ensure that contractors are real humans, preventing malicious actors from spinning up multiple wallets to drain grant pools.
2. **Frictionless Mobile UX:** Contributors don't need to download a separate browser extension (like MetaMask). They open World App, tap "ZamaPay", and decrypt their FHE salary instantly.
3. **Gasless/Sponsored Transactions:** World App handles the gas abstraction, meaning employees claiming their salary pay zero network fees.

## Implementation Steps (Next 2 Hours)

1. **Install MiniKit SDK:**
   ```bash
   npm install @worldcoin/minikit-js
   ```

2. **Wrap Next.js Provider:**
   Wrap our `layout.tsx` in the `<MiniKitProvider>` to initialize the bridge between the Next.js iframe and the native World App shell.

3. **Verify Command (Employee Dashboard):**
   Add a "Verify Humanity" button on the `/employee` dashboard before they can claim their salary.
   ```typescript
   import { MiniKit } from '@worldcoin/minikit-js'

   const handleVerify = async () => {
     const res = await MiniKit.commands.verify({
       action: 'claim-salary',
       signal: employeeWalletAddress,
     })
     if (res.status === 'success') {
       // Unlock Claim Button
     }
   }
   ```

4. **World App Submission:**
   Register the Next.js Vercel URL in the Worldcoin Developer Portal to get an `app_id` and test it in the World App Simulator.
