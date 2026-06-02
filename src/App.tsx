import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ConfidentialEntry } from "./components/ConfidentialEntry";
import { AppShell } from "./components/AppShell";
import type { RoleId } from "./data/rolesData";

export default function App() {
  const [role, setRole] = useState<RoleId | null>(null);

  return (
    <AnimatePresence mode="wait">
      {role === null ? (
        <motion.div
          key="entry"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ConfidentialEntry onEnter={setRole} />
        </motion.div>
      ) : (
        <motion.div
          key="console"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AppShell role={role} onExit={() => setRole(null)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
