import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import HeroCard from "./components/HeroCard";
import UsersCard from "./components/UsersCard";
import WaterCard from "./components/WaterCard";
import { AuthInfo } from "../../utils/src/types";
import { checkIsAuthenticated } from "../../utils/src/home-hub-utils";
import EditProfile from "./components/EditProfile";

export default function Root() {
  const [authInfo, setAuthInfo] = useState<AuthInfo | undefined>();

  useEffect(() => {
    const { isAuthenticated, authInfo: authObj } = checkIsAuthenticated();
    if (!isAuthenticated) return location.replace("/");
    setAuthInfo(authObj);
  }, []);

  return (
    <div id="single-spa-application:react-dashboard">
      {location.pathname.includes("edit-profile") ? (
        <EditProfile />
      ) : (
        <Box
          width={3 / 4}
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ margin: "auto" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <HeroCard />
            </Grid>
            <Grid item xs={4}>
              <UsersCard />
            </Grid>
            <Grid item xs={4}>
              <WaterCard />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
