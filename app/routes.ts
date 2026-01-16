import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/main.tsx", [
    index("routes/home.tsx"),
    route("profile", "routes/profile.tsx"),
    route("groups", "routes/groups.tsx"),
    route("groups/:groupId", "routes/group.tsx"),
    route("inbox", "routes/inbox.tsx"),
    route("calendar", "routes/calendar.tsx"),
  ]),
] satisfies RouteConfig;
