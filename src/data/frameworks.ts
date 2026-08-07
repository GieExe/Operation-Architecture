export type Tier = "all" | "small" | "serious";

export interface FrameworkBlock {
  title: string;
  svgIcon: string;
  contentHtml: string;
  fullWidth: boolean;
  tier?: Tier;
}

export interface Framework {
  id: string;
  cat: string;
  name: string;
  icon: string;
  archBadge: string;
  blocks: FrameworkBlock[];
}

export const frameworks: Framework[] = [
  {
    "id": "react-native",
    "cat": "mobile",
    "name": "React Native",
    "icon": "RN",
    "archBadge": "Feature-Based MVVM + UDF",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Feature folders + hooks in a single Expo project.</strong> Skip Clean Architecture layers. Each feature owns its components, hooks, and local types. Use Zustand or Context for state, TanStack Query for server data. No separate domain or data layers — just straightforward components and services.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── App.tsx                 <span class=\"comment\"># Entry point + providers</span>\n├── <span class=\"dir\">features/</span>\n│   ├── <span class=\"dir\">auth/</span>\n│   │   ├── LoginScreen.tsx\n│   │   ├── useAuth.ts      <span class=\"comment\"># Hook with login/logout logic</span>\n│   │   └── auth.types.ts\n│   ├── <span class=\"dir\">feed/</span>\n│   └── <span class=\"dir\">profile/</span>\n├── <span class=\"dir\">components/</span>           <span class=\"comment\"># Shared UI components</span>\n├── <span class=\"dir\">services/</span>             <span class=\"comment\"># API client (fetch wrapper)</span>\n└── <span class=\"dir\">utils/</span>                <span class=\"comment\"># Helpers, formatters</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >Feature-Based MVVM with Unidirectional Data Flow.</strong\r\n                  >\r\n                  Each feature encapsulates its ViewModel (custom hooks /\r\n                  Zustand stores), View (React components), and Model\r\n                  (TypeScript types + API layer). Expo SDK 52+ with\r\n                  <strong>Expo Router v4</strong> provides file-based routing\r\n                  and deep linking for free. <strong>NativeWind</strong>\r\n                  (Tailwind CSS for React Native) eliminates StyleSheet\r\n                  boilerplate with utility-first styling. Clean Architecture\r\n                  layers (domain / data / presentation) sit underneath for\r\n                  complex business logic.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Unidirectional data flow</strong> — props down,\r\n                    callbacks up\r\n                  </li>\r\n                  <li>\r\n                    <strong>Zustand / Jotai</strong> for global state with\r\n                    selector-based subscriptions\r\n                  </li>\r\n                  <li>\r\n                    <strong>TanStack Query v5</strong> owns server state (cache,\r\n                    refetch, optimistic); Infinite Queries for paginated feeds\r\n                  </li>\r\n                  <li>\r\n                    <strong>New Architecture</strong> (Fabric + TurboModules)\r\n                    eliminates async bridge — synchronous native calls, shared C++\r\n                    core, and JSI replaces the JSON bridge\r\n                  </li>\r\n                  <li>\r\n                    <strong>Expo Router v4</strong> — file-based routing with\r\n                    typed <code>href</code>, <code>expo-linking</code> deep links,\r\n                    and API routes via <code>+api.ts</code>\r\n                  </li>\r\n                  <li>\r\n                    <strong>NativeWind v4</strong> — Tailwind CSS in React\r\n                    Native via StyleSheet compilation; reduces style code by ~60%\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── <span class=\"dir\">app/</span>\n    │   ├── <span class=\"dir\">providers/</span> <span class=\"comment\" ># ThemeProvider, QueryClientProvider</span >\n    │   ├── <span class=\"dir\">navigation/</span>          <span class=\"comment\"># RootNavigator, TabNavigator</span>\n    │   └── App.tsx              <span class=\"comment\"># Entry point</span>\n    ├── <span class=\"dir\">features/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── <span class=\"dir\">components/</span>      <span class=\"comment\"># LoginForm.tsx, SignUpForm.tsx</span>\n    │   │   ├── <span class=\"dir\">hooks/</span>           <span class=\"comment\"># useAuth.ts, useLogin.ts</span>\n    │   │   ├── <span class=\"dir\">store/</span>           <span class=\"comment\"># authStore.ts (Zustand)</span>\n    │   │   ├── <span class=\"dir\">api/</span>             <span class=\"comment\"># authApi.ts</span>\n    │   │   └── <span class=\"dir\">types/</span>           <span class=\"comment\"># auth.types.ts</span>\n    │   ├── <span class=\"dir\">feed/</span>\n    │   └── <span class=\"dir\">profile/</span>\n    ├── <span class=\"dir\">shared/</span>\n    │   ├── <span class=\"dir\">components/</span>          <span class=\"comment\"># Button.tsx, Input.tsx</span>\n    │   ├── <span class=\"dir\">hooks/</span>               <span class=\"comment\"># useDebounce.ts</span>\n    │   ├── <span class=\"dir\">utils/</span>               <span class=\"comment\"># formatters.ts</span>\n    │   └── <span class=\"dir\">theme/</span>               <span class=\"comment\"># colors.ts, typography.ts</span>\n    └── <span class=\"dir\">infra/</span>\n    ├── <span class=\"dir\">api/</span> <span class=\"comment\" ># httpClient.ts (Axios + interceptors)</span >\n    ├── <span class=\"dir\">storage/</span>                 <span class=\"comment\"># mmkvStorage.ts</span>\n    └── <span class=\"dir\">analytics/</span>               <span class=\"comment\"># tracking.ts</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use NestJS",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p><strong>Don't use NestJS when:</strong> Your team is under 5 people and the domain is simple — CQRS and Hexagonal Architecture add real overhead. Your API is purely CRUD with no business logic — Express or Fastify is faster. You prefer functional composition — NestJS's decorator-heavy style is opinionated. You're building a prototype — NestJS's ceremony slows rapid iteration. CQRS only makes sense when read and write patterns genuinely differ.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Tradeoffs & Honest Assessment",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>NestJS is the most structured Node.js backend framework. Its DI system makes dependency graphs explicit and testable. The tradeoff: it's verbose and opinionated. CQRS adds real value only when your read and write patterns genuinely differ. The modular architecture scales well, but at the cost of more files and more indirection than Express/Fastify.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use React Native",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use React Native when:</strong> You need heavy GPU computation (3D, video, AR) — native is faster. App is UI-simple (3-5 screens) — native is faster to ship. Need deep OS integration (widgets, custom notifications). Team has zero React/JS experience. Must run on very old Android devices — RN has higher baseline memory.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Global State</td>\r\n                    <td>Zustand / Jotai</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Server State</td>\r\n                    <td>TanStack Query v5</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Navigation</td>\r\n                    <td>React Navigation v7</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Forms</td>\r\n                    <td>React Hook Form + Zod</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Storage</td>\r\n                    <td>react-native-mmkv</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Animations</td>\r\n                    <td>Reanimated 3</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>Jest + RNTL + Detox</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "flutter",
    "cat": "mobile",
    "name": "Flutter",
    "icon": "FL",
    "archBadge": "BLoC + Clean Architecture",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Provider + feature folders in a single Dart package.</strong> Skip BLoC complexity and Clean Architecture layers. Use Provider or Riverpod for state, simple services for data fetching. Each feature has its pages, widgets, and a single service file. No separate domain/data layers.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">lib/</span>\n├── main.dart               <span class=\"comment\"># MaterialApp + providers</span>\n├── <span class=\"dir\">features/</span>\n│   ├── <span class=\"dir\">auth/</span>\n│   │   ├── login_page.dart\n│   │   ├── auth_provider.dart  <span class=\"comment\"># ChangeNotifier or Riverpod</span>\n│   │   └── auth_service.dart\n│   ├── <span class=\"dir\">feed/</span>\n│   └── <span class=\"dir\">profile/</span>\n├── <span class=\"dir\">widgets/</span>              <span class=\"comment\"># Shared UI widgets</span>\n├── <span class=\"dir\">services/</span>             <span class=\"comment\"># API client (Dio)</span>\n└── <span class=\"dir\">utils/</span>                <span class=\"comment\"># Helpers</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >BLoC (Business Logic Component) Pattern with Feature-First\r\n                    Modularization.</strong\r\n                  >\r\n                  UI dispatches <strong>Events</strong> → BLoC processes them →\r\n                  BLoC emits <strong>States</strong> → UI rebuilds. Riverpod\r\n                  handles simpler global state; get_it provides service\r\n                  location. Feature-first folder organization maps to Dart's\r\n                  library system.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Dart Streams</strong> underlie BLoC —\r\n                    <code>add(event)</code> →\r\n                    <code>on&lt;Event&gt;</code> handler →\r\n                    <code>emit(state)</code>\r\n                  </li>\r\n                  <li>\r\n                    <strong>BlocBuilder/BlocConsumer</strong> subscribe to state\r\n                    changes with selector support\r\n                  </li>\r\n                  <li>\r\n                    <strong>Riverpod</strong> providers use\r\n                    <code>ref.watch()</code> / <code>ref.read()</code> for\r\n                    reactive subscriptions with compile-time safety\r\n                  </li>\r\n                  <li>\r\n                    <strong>AsyncValue</strong> handles loading/error/data\r\n                    states for server calls\r\n                  </li>\r\n                  <li>\r\n                    <strong>go_router</strong> integrates with Riverpod for\r\n                    route-level state\r\n                  </li>\r\n                  <li>\r\n                    <strong>Impeller</strong> renderer (Android/iOS stable) —\r\n                    eliminates shader compilation jank; AOT-compiled GPU\r\n                    shaders deliver 60fps by default on all platforms\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">lib/</span>\n    ├── <span class=\"dir\">app/</span>\n    │   ├── app.dart <span class=\"comment\" ># MaterialApp + providers + router</span >\n    │   ├── <span class=\"dir\">router/</span>                    <span class=\"comment\"># go_router config</span>\n    │   └── <span class=\"dir\">di/</span>                        <span class=\"comment\"># get_it injection setup</span>\n    ├── <span class=\"dir\">features/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── <span class=\"dir\">data/</span>\n    │   │   │   ├── <span class=\"dir\">datasources/</span>       <span class=\"comment\"># auth_remote_ds.dart</span>\n    │   │   │   ├── <span class=\"dir\">models/</span>            <span class=\"comment\"># user_model.dart</span>\n    │   │   │   └── <span class=\"dir\">repositories/</span>      <span class=\"comment\"># auth_repo_impl.dart</span>\n    │   │   ├── <span class=\"dir\">domain/</span>\n    │   │   │   ├── <span class=\"dir\">entities/</span>          <span class=\"comment\"># user_entity.dart</span>\n    │   │   │   ├── <span class=\"dir\">repositories/</span>      <span class=\"comment\"># auth_repo.dart (abstract)</span>\n    │   │   │   └── <span class=\"dir\">usecases/</span>          <span class=\"comment\"># login_usecase.dart</span>\n    │   │   └── <span class=\"dir\">presentation/</span>\n    │   │   ├── <span class=\"dir\">bloc/</span> <span class=\"comment\" ># auth_bloc.dart + events + states</span >\n    │   │   ├── <span class=\"dir\">pages/</span>                 <span class=\"comment\"># login_page.dart</span>\n    │   │   └── <span class=\"dir\">widgets/</span>               <span class=\"comment\"># login_form.dart</span>\n    │   ├── <span class=\"dir\">feed/</span>\n    │   └── <span class=\"dir\">profile/</span>\n    ├── <span class=\"dir\">core/</span>\n    │   ├── <span class=\"dir\">theme/</span>                     <span class=\"comment\"># app_theme.dart</span>\n    │   ├── <span class=\"dir\">error/</span>                     <span class=\"comment\"># failures.dart</span>\n    │   ├── <span class=\"dir\">network/</span> <span class=\"comment\" ># api_client.dart, dio_interceptors.dart</span >\n    │   └── <span class=\"dir\">usecases/</span>                  <span class=\"comment\"># usecase.dart base class</span>\n    ├── <span class=\"dir\">shared/</span>\n    │   └── <span class=\"dir\">widgets/</span>                   <span class=\"comment\"># app_button.dart</span>\n    └── main.dart\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Flutter renders via Skia/Impeller — no native UI wrappers, no\r\n                  bridge overhead. BLoC leverages Dart's native Stream support\r\n                  for zero-cost event→state→UI cycles. Clean Architecture layers\r\n                  map cleanly: BLoC in presentation calls use cases, which call\r\n                  repository abstractions, implemented in the data layer.\r\n                  Riverpod eliminates widget-tree dependency for scoping with\r\n                  compile-time safety.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Flutter",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Flutter when:</strong> Need deep iOS/Android platform integration (widgets, extensions, health APIs) — native required. Team is small targeting one platform — native is simpler. Need mature third-party package ecosystem for niche features. App requires complex platform-specific UI.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>State (complex)</td>\r\n                    <td>flutter_bloc / bloc</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>State (simple)</td>\r\n                    <td>Riverpod</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>DI</td>\r\n                    <td>get_it + injectable</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Navigation</td>\r\n                    <td>go_router</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Networking</td>\r\n                    <td>Dio + retrofit</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Local DB</td>\r\n                    <td>drift (SQLite) / Isar</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Serialization</td>\r\n                    <td>freezed + json_serializable</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "swiftui",
    "cat": "mobile",
    "name": "Swift / SwiftUI",
    "icon": "SW",
    "archBadge": "MVVM + Coordinator",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>SwiftUI Views + Observable models in a single Xcode target.</strong> Skip Coordinator pattern and multi-module separation. Use <code>@Observable</code> macro for ViewModels, <code>URLSession</code> for networking. Each screen is a View + its Observable model. Simple, direct, SwiftUI-native.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">MyApp/</span>\n├── MyApp.swift            <span class=\"comment\"># @main App entry</span>\n├── <span class=\"dir\">Features/</span>\n│   ├── <span class=\"dir\">Auth/</span>\n│   │   ├── LoginView.swift\n│   │   └── AuthViewModel.swift  <span class=\"comment\"># @Observable</span>\n│   ├── <span class=\"dir\">Feed/</span>\n│   └── <span class=\"dir\">Profile/</span>\n├── <span class=\"dir\">Components/</span>           <span class=\"comment\"># Reusable views</span>\n├── <span class=\"dir\">Services/</span>             <span class=\"comment\"># APIClient.swift</span>\n└── <span class=\"dir\">Models/</span>               <span class=\"comment\"># Codable structs</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>MVVM + Coordinator with Combine/async-await.</strong>\r\n                  SwiftUI Views are structs (View), the ViewModel is an\r\n                  <code>@Observable</code> macro class, and Models are plain\r\n                  Swift value types. The Coordinator pattern handles navigation\r\n                  flow, decoupling navigation logic from views. Clean\r\n                  Architecture layers added for complex domains.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>@State</strong> — local mutable state in a view\r\n                  </li>\r\n                  <li>\r\n                    <strong>@Binding</strong> — two-way connection to parent's\r\n                    @State\r\n                  </li>\r\n                  <li>\r\n                    <strong>@Observable</strong> — macro-based fine-grained\r\n                    dependency tracking (Swift 5.9+)\r\n                  </li>\r\n                  <li>\r\n                    <strong>@Environment</strong> — DI at the view-tree level\r\n                  </li>\r\n                  <li>\r\n                    <strong>async/await</strong> — async data fetching replaces\r\n                    Combine pipelines\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">Sources/</span>\n    ├── <span class=\"dir\">App/</span>\n    │   ├── MyApp.swift                <span class=\"comment\"># @main App entry</span>\n    │   ├── AppCoordinator.swift       <span class=\"comment\"># Root coordinator</span>\n    │   └── <span class=\"dir\">DI/</span>\n    │   └── Container.swift <span class=\"comment\" ># Composition root (Factory library)</span >\n    ├── <span class=\"dir\">Features/</span>\n    │   ├── <span class=\"dir\">Auth/</span>\n    │   │   ├── <span class=\"dir\">Presentation/</span>\n    │   │   │   ├── <span class=\"dir\">Views/</span>             <span class=\"comment\"># LoginView.swift</span>\n    │   │   │   └── <span class=\"dir\">ViewModels/</span>        <span class=\"comment\"># LoginViewModel.swift</span>\n    │   │   ├── <span class=\"dir\">Domain/</span>\n    │   │   │   ├── <span class=\"dir\">Entities/</span>          <span class=\"comment\"># User.swift</span>\n    │   │   │   ├── <span class=\"dir\">Repositories/</span>      <span class=\"comment\"># AuthRepositoryProtocol.swift</span>\n    │   │   │   └── <span class=\"dir\">UseCases/</span>          <span class=\"comment\"># LoginUseCase.swift</span>\n    │   │   └── <span class=\"dir\">Data/</span>\n    │   │   ├── <span class=\"dir\">Repositories/</span>          <span class=\"comment\"># AuthRepository.swift (impl)</span>\n    │   │   ├── <span class=\"dir\">DTOs/</span>                  <span class=\"comment\"># LoginRequest.swift</span>\n    │   │   └── <span class=\"dir\">Services/</span>              <span class=\"comment\"># AuthService.swift</span>\n    │   ├── <span class=\"dir\">Feed/</span>\n    │   └── <span class=\"dir\">Profile/</span>\n    ├── <span class=\"dir\">Core/</span>\n    │   ├── <span class=\"dir\">Networking/</span>                <span class=\"comment\"># APIClient.swift</span>\n    │   ├── <span class=\"dir\">Persistence/</span>               <span class=\"comment\"># SwiftDataStack.swift</span>\n    │   └── <span class=\"dir\">Extensions/</span>\n    └── <span class=\"dir\">Shared/</span>\n    ├── <span class=\"dir\">Components/</span>                    <span class=\"comment\"># ReusableButton.swift</span>\n    └── <span class=\"dir\">Theme/</span>                         <span class=\"comment\"># Colors.swift, Fonts.swift</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  SwiftUI views are value-type structs — they describe UI, not\r\n                  hold state. This makes MVVM the only architecture that\r\n                  naturally maps: ViewModel is the single source of truth, views\r\n                  are a function of that state. @Observable provides\r\n                  fine-grained invalidation — only views reading a specific\r\n                  property re-render, unlike @ObservableObject's coarse\r\n                  objectWillChange.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use SwiftUI",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use SwiftUI when:</strong> Must support iOS 12 or earlier — SwiftUI requires iOS 13+. Need complex custom rendering (games, video editors) — UIKit is more predictable. Need deep UIKit customization. App requires backward compatibility with Objective-C codebases.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>DI</td>\r\n                    <td>Factory / Swinject</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Networking</td>\r\n                    <td>URLSession + async/await</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Persistence</td>\r\n                    <td>SwiftData / GRDB</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Images</td>\r\n                    <td>Kingfisher / Nuke</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Routing</td>\r\n                    <td>Coordinator pattern</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>XCTest + swift-snapshot-testing</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "android-compose",
    "cat": "mobile",
    "name": "Kotlin / Jetpack Compose",
    "icon": "KT",
    "archBadge": "MVVM + Clean Architecture + UDF",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Composables + ViewModels in a single app module.</strong> Skip multi-module Clean Architecture. Use Hilt for DI, Room for local storage, Retrofit for networking. Each feature has its screen composable, ViewModel, and repository — all in one package. StateFlow drives the UI.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">app/src/main/java/com/example/</span>\n├── MainActivity.kt        <span class=\"comment\"># setContent entry</span>\n├── <span class=\"dir\">features/</span>\n│   ├── <span class=\"dir\">auth/</span>\n│   │   ├── LoginScreen.kt\n│   │   ├── AuthViewModel.kt\n│   │   ├── AuthRepository.kt\n│   │   └── AuthApi.kt     <span class=\"comment\"># Retrofit interface</span>\n│   ├── <span class=\"dir\">feed/</span>\n│   └── <span class=\"dir\">profile/</span>\n├── <span class=\"dir\">components/</span>           <span class=\"comment\"># Reusable composables</span>\n├── <span class=\"dir\">data/</span>                 <span class=\"comment\"># Room DB, models</span>\n└── <span class=\"dir\">di/</span>                   <span class=\"comment\"># Hilt modules</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >MVVM + Clean Architecture with Unidirectional Data\r\n                    Flow.</strong\r\n                  >\r\n                  Google's official guidance: ViewModel exposes\r\n                  <code>StateFlow&lt;UiState&gt;</code>, Composable observes via\r\n                  <code>collectAsStateWithLifecycle()</code>, user actions\r\n                  dispatched as one-way events. Domain/Data/Presentation layers\r\n                  for non-trivial apps. Hilt for DI.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>StateFlow&lt;UiState&gt;</strong> — immutable data\r\n                    class, single source of truth\r\n                  </li>\r\n                  <li>\r\n                    <strong>collectAsStateWithLifecycle()</strong> —\r\n                    lifecycle-aware subscription\r\n                  </li>\r\n                  <li>\r\n                    <strong>Side effects</strong> via sealed UiEffect/UiEvent\r\n                    Channel\r\n                  </li>\r\n                  <li>\r\n                    <strong>SavedStateHandle</strong> survives process death\r\n                  </li>\r\n                  <li><strong>Coroutines + Flow</strong> for all async work</li>\r\n                  <li>\r\n                    <strong>Hilt</strong> provides constructor injection at\r\n                    every layer\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">app/src/main/java/com/example/app/</span>\n    ├── App.kt                         <span class=\"comment\"># @HiltAndroidApp</span>\n    ├── MainActivity.kt                <span class=\"comment\"># setContent { AppNavigation() }</span>\n    ├── <span class=\"dir\">di/</span>\n    │   ├── AppModule.kt               <span class=\"comment\"># @Module: Retrofit, DB bindings</span>\n    │   └── RepositoryModule.kt\n    ├── <span class=\"dir\">navigation/</span>\n    │   ├── AppNavigation.kt           <span class=\"comment\"># NavHost with routes</span>\n    │   └── Route.kt                   <span class=\"comment\"># Sealed class of routes</span>\n    ├── <span class=\"dir\">features/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── <span class=\"dir\">data/</span>\n    │   │   │   ├── <span class=\"dir\">api/</span>               <span class=\"comment\"># AuthApi.kt (Retrofit)</span>\n    │   │   │   ├── <span class=\"dir\">dto/</span>               <span class=\"comment\"># LoginRequest.kt</span>\n    │   │   │   └── <span class=\"dir\">repository/</span>        <span class=\"comment\"># AuthRepositoryImpl.kt</span>\n    │   │   ├── <span class=\"dir\">domain/</span>\n    │   │   │   ├── <span class=\"dir\">model/</span>             <span class=\"comment\"># User.kt</span>\n    │   │   │   ├── <span class=\"dir\">repository/</span>        <span class=\"comment\"># AuthRepository.kt (interface)</span>\n    │   │   │   └── <span class=\"dir\">usecase/</span>           <span class=\"comment\"># LoginUseCase.kt</span>\n    │   │   └── <span class=\"dir\">presentation/</span>\n    │   │   ├── LoginScreen.kt         <span class=\"comment\"># @Composable</span>\n    │   │   ├── LoginViewModel.kt      <span class=\"comment\"># @HiltViewModel</span>\n    │   │   └── LoginUiState.kt        <span class=\"comment\"># data class</span>\n    │   ├── <span class=\"dir\">feed/</span>\n    │   └── <span class=\"dir\">profile/</span>\n    ├── <span class=\"dir\">core/</span>\n    │   ├── <span class=\"dir\">network/</span>                   <span class=\"comment\"># HttpClient.kt, Result.kt</span>\n    │   ├── <span class=\"dir\">database/</span>                  <span class=\"comment\"># AppDatabase.kt</span>\n    │   └── <span class=\"dir\">ui/</span>                        <span class=\"comment\"># Theme.kt, CommonComponents.kt</span>\n    └── build.gradle.kts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Jetpack Compose is declarative and reactive — it redraws\r\n                  composables when state changes, fundamentally demanding UDF.\r\n                  The ViewModel is the only lifecycle-aware component surviving\r\n                  configuration changes.\r\n                  <code>collectAsStateWithLifecycle()</code> cancels collection\r\n                  when below STARTED. Clean Architecture prevents ViewModel \"God\r\n                  Object\" syndrome. Hilt is mandatory at scale.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Compose",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Compose when:</strong> Must support Android 5 (API 21) — Compose requires API 21+ but older devices may struggle. App is very simple — XML views are lighter. Large existing View-based codebase that would need full rewrite. Need specific View components not yet ported to Compose.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>DI</td>\r\n                    <td>Hilt (Dagger)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Networking</td>\r\n                    <td>Retrofit + Moshi</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Local DB</td>\r\n                    <td>Room (with Flow)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Async</td>\r\n                    <td>Kotlin Coroutines + Flow</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Navigation</td>\r\n                    <td>Navigation Compose</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Images</td>\r\n                    <td>Coil Compose</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Paging</td>\r\n                    <td>Paging 3</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>JUnit 5 + Turbine + Compose UI Test</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "ionic",
    "cat": "mobile",
    "name": "Ionic",
    "icon": "IO",
    "archBadge": "MVVM + Web Component Abstraction",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Host framework's default pattern + Ionic UI components.</strong> Use Angular's module-based or React's functional approach with Ionic's pre-built UI. Pages are standard components with Ionic components. Services handle API calls. No elaborate separation — lean on the host framework's conventions.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── App.tsx               <span class=\"comment\"># IonApp + routing</span>\n├── <span class=\"dir\">pages/</span>\n│   ├── Login.tsx          <span class=\"comment\"># IonInput, IonButton</span>\n│   ├── Home.tsx\n│   └── Profile.tsx\n├── <span class=\"dir\">components/</span>           <span class=\"comment\"># Shared Ionic components</span>\n├── <span class=\"dir\">services/</span>             <span class=\"comment\"># API + auth service</span>\n└── <span class=\"dir\">hooks/</span>                <span class=\"comment\"># Custom hooks</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >MVVM with Web Component Abstraction via Capacitor.</strong\r\n                  >\r\n                  Ionic renders web technologies inside a native WebView. The\r\n                  architecture follows its host framework (Angular or React).\r\n                  The key architectural concern:\r\n                  <strong\r\n                    >Capacitor plugin services must be abstracted behind\r\n                    injectable interfaces</strong\r\n                  >\r\n                  so native and web paths can diverge cleanly.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    Data flow matches\r\n                    <strong>host framework</strong> conventions\r\n                  </li>\r\n                  <li>\r\n                    Angular: two-way binding via <code>[(ngModel)]</code> + RxJS\r\n                    Observables\r\n                  </li>\r\n                  <li>React: unidirectional flow with hooks</li>\r\n                  <li>\r\n                    <strong>Capacitor</strong> bridges native APIs via\r\n                    synchronous JS → Promise calls\r\n                  </li>\r\n                  <li>\r\n                    State management follows host: NgRx/Signals (Angular),\r\n                    Zustand (React)\r\n                  </li>\r\n                  <li>\r\n                    <strong>Provider pattern</strong> isolates Capacitor vs.\r\n                    web-only implementations\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── <span class=\"dir\">app/</span>\n    │   ├── app.module.ts\n    │   ├── app-routing.module.ts\n    │   └── <span class=\"dir\">core/</span>\n    │   ├── <span class=\"dir\">guards/</span>                              <span class=\"comment\"># auth.guard.ts</span>\n    │   ├── <span class=\"dir\">interceptors/</span>                        <span class=\"comment\"># token.interceptor.ts</span>\n    │   └── <span class=\"dir\">services/</span>\n    │   └── platform.service.ts                  <span class=\"comment\"># Capacitor vs Web abstraction</span>\n    ├── <span class=\"dir\">features/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── <span class=\"dir\">pages/</span>\n    │   │   ├── <span class=\"dir\">services/</span>\n    │   │   └── <span class=\"dir\">models/</span>\n    │   ├── <span class=\"dir\">camera/</span>\n    │   │   └── <span class=\"dir\">services/</span>\n    │   │   ├── camera.service.ts                <span class=\"comment\"># Interface</span>\n    │   │   ├── camera-capacitor.service.ts      <span class=\"comment\"># Native impl</span>\n    │   │   └── camera-web.service.ts            <span class=\"comment\"># Fallback impl</span>\n    │   └── ...\n    ├── <span class=\"dir\">shared/</span>\n    │   ├── <span class=\"dir\">components/</span>\n    │   └── <span class=\"dir\">pipes/</span>\n    └── <span class=\"dir\">environments/</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Ionic's web-view rendering model prevents using native UI\r\n                  paradigms. MVVM with Angular's DI system can swap\r\n                  Capacitor-plugin services with web-only implementations at\r\n                  module level. The provider pattern is essential for\r\n                  progressive enhancement — the app must degrade gracefully when\r\n                  native APIs are unavailable.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Ionic",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Ionic when:</strong> Need native performance (gaming, heavy animations, 3D) — Ionic runs in WebView. App requires complex platform-specific features (NFC, Bluetooth, AR). Need offline-first with heavy data processing. App must feel truly native in complex interactions.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Native Bridge</td>\r\n                    <td>Capacitor 6+</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>State (Angular)</td>\r\n                    <td>NgRx Signals / Akita</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>State (React)</td>\r\n                    <td>Zustand</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Storage</td>\r\n                    <td>@ionic/storage</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Build</td>\r\n                    <td>Ionic CLI + Vite</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "nextjs",
    "cat": "frontend",
    "name": "Next.js (React)",
    "icon": "NX",
    "archBadge": "Server-First Layered Architecture with RSC",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>App Router flat pages + server actions in a single Next.js project.</strong> Skip layered architecture. Use route groups for organization, Server Components for data fetching, <code>'use client'</code> sparingly. Server Actions for mutations. Drizzle/Prisma directly in components. Minimal boilerplate, maximum speed.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">app/</span>\n├── layout.tsx             <span class=\"comment\"># Root layout</span>\n├── page.tsx               <span class=\"comment\"># Home</span>\n├── <span class=\"dir\">login/</span>\n│   └── page.tsx\n├── <span class=\"dir\">dashboard/</span>\n│   ├── layout.tsx\n│   └── page.tsx\n├── <span class=\"dir\">api/</span>\n│   └── <span class=\"dir\">auth/</span>[...nextauth]/route.ts\n└── actions.ts             <span class=\"comment\"># Server Actions</span>\n<span class=\"dir\">lib/</span>\n├── db.ts                  <span class=\"comment\"># Drizzle/Prisma client</span>\n└── auth.ts                <span class=\"comment\"># Auth config</span>\n<span class=\"dir\">components/</span>               <span class=\"comment\"># Shared components</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >Server-First Layered Architecture with React Server\r\n                    Components (RSC).</strong\r\n                  >\r\n                  Components are Server Components by default — they execute on\r\n                  the server and send rendered HTML + RSC payload to the client.\r\n                  Client Components (<code>'use client'</code>) are islands of\r\n                  interactivity. Route Handlers / Server Actions handle\r\n                  mutations.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Server Components</strong> fetch data directly —\r\n                    async await in the component; the DB query is co-located\r\n                  </li>\r\n                  <li>\r\n                    <strong>Partial Prerendering (PPR)</strong> — static\r\n                    shell streams instantly, dynamic holes stream later;\r\n                    combine <code>generateStaticParams</code> with\r\n                    <code>experimental_ppr = true</code> in Next.js 16\r\n                  </li>\r\n                  <li>\r\n                    <strong>Server Actions</strong> replace API routes for\r\n                    mutations; <code>'use server'</code> colocated in components;\r\n                    <code>revalidatePath()</code> / <code>revalidateTag()</code>\r\n                    for cache invalidation\r\n                  </li>\r\n                  <li>\r\n                    <strong>connection()</strong> — opt out of static\r\n                    prerendering for dynamic data on a per-component basis\r\n                    (replaces <code>dynamic = 'force-dynamic'</code>)\r\n                  </li>\r\n                  <li>\r\n                    Global client state <strong>minimized</strong> — most state\r\n                    is server-derived; when needed:\r\n                    <strong>nuqs</strong> for URL search params as state\r\n                  </li>\r\n                  <li>When needed: Zustand or Jotai (sparingly) for\r\n                    ephemeral UI state</li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n  <span class=\"dir\">app/</span>\n  ├── layout.tsx                      <span class=\"comment\"># Root layout (Server Component)</span>\n  ├── page.tsx                        <span class=\"comment\"># Home route</span>\n  ├── loading.tsx                     <span class=\"comment\"># Suspense fallback</span>\n  ├── error.tsx                       <span class=\"comment\"># Error boundary</span>\n  ├── <span class=\"dir\">(marketing)/</span>                    <span class=\"comment\"># Route group (no URL segment)</span>\n  │   ├── layout.tsx\n  │   └── <span class=\"dir\">about/</span>page.tsx\n  ├── <span class=\"dir\">(dashboard)/</span>\n  │   ├── layout.tsx                  <span class=\"comment\"># Sidebar + auth check</span>\n  │   ├── page.tsx                    <span class=\"comment\"># Dashboard home</span>\n  │   └── <span class=\"dir\">analytics/</span>\n  │       ├── page.tsx\n  │       └── <span class=\"dir\">components/</span>\n  │           └── Chart.client.tsx    <span class=\"comment\"># Client Component</span>\n  ├── <span class=\"dir\">api/</span>                            <span class=\"comment\"># Route Handlers</span>\n  │   └── <span class=\"dir\">webhooks/</span>stripe/route.ts\n  ├── <span class=\"dir\">lib/</span>\n  │   ├── db.ts                       <span class=\"comment\"># Drizzle/Prisma singleton</span>\n  │   └── auth.ts                     <span class=\"comment\"># NextAuth v5 config</span>\n  ├── <span class=\"dir\">components/</span>\n  │   ├── <span class=\"dir\">ui/</span>                         <span class=\"comment\"># shadcn/ui primitives</span>\n  │   └── <span class=\"dir\">shared/</span>\n  ├── middleware.ts                   <span class=\"comment\"># Auth redirects, A/B testing</span>\n  └── next.config.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  RSC eliminates the client-side waterfall: the server fetches\r\n                  all data in one pass, renders the component tree, and streams\r\n                  it. Client Components are minimized to interactive islands,\r\n                  reducing JS bundle size. Server Actions colocate mutations\r\n                  with components. The old getServerSideProps→hydrate→manage\r\n                  client state model is obsolete.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Next.js",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Next.js when:</strong> Building a simple static site — Astro is lighter. App is purely client-side with no SEO — Vite + React is simpler. Need maximum routing flexibility without conventions. Team is small and doesn't need SSR/SSG complexity.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>NextAuth v5 (Auth.js)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>ORM</td>\r\n                    <td>Drizzle / Prisma</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Validation</td>\r\n                    <td>Zod</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Styling</td>\r\n                    <td>Tailwind CSS + shadcn/ui</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Forms</td>\r\n                    <td>React Hook Form</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>Vitest + Playwright</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Monitoring</td>\r\n                    <td>Vercel Analytics + Sentry</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "reactjs",
    "cat": "frontend",
    "name": "React JS (SPA)",
    "icon": "RE",
    "archBadge": "Functional Components with Hooks + Client-Side Routing",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Vite SPA with page components and hooks.</strong> Flat structure with pages as top-level components, custom hooks for data fetching, and a simple services folder for API calls. Use Zustand or Context for global state. No feature folders, no elaborate layering — just components, hooks, and services.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── main.tsx               <span class=\"comment\"># Entry point</span>\n├── App.tsx                <span class=\"comment\"># Router setup</span>\n├── <span class=\"dir\">pages/</span>\n│   ├── Home.tsx\n│   ├── Login.tsx\n│   └── Dashboard.tsx\n├── <span class=\"dir\">components/</span>           <span class=\"comment\"># Shared UI</span>\n├── <span class=\"dir\">hooks/</span>                <span class=\"comment\"># useAuth, useFetch</span>\n├── <span class=\"dir\">services/</span>             <span class=\"comment\"># api.ts</span>\n└── <span class=\"dir\">utils/</span>                <span class=\"comment\"># Helpers</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                  >\n                    <path\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\n                    /></svg\n                  >",
        "contentHtml": "<p>\n                  <strong>Functional Components with Hooks + Client-Side Routing.</strong>\n                  The application is fully compiled to static assets (HTML, CSS, JS) and hydrated on the client. UI logic, routing, and state management execute entirely within the browser.\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                  >\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\n                  >",
        "contentHtml": "<ul>\n                  <li>\n                    <strong>Client-Side Routing</strong> manages page transitions without page reloads.\n                  </li>\n                  <li>\n                    <strong>State Management</strong> (Context, Zustand, Redux) stores UI and global state.\n                  </li>\n                  <li>\n                    <strong>Data Fetching</strong> via hooks (e.g. TanStack Query) manages server cache, loading, and error states.\n                  </li>\n                  <li>\n                    <strong>Client-side APIs</strong> are queried directly from the browser.\n                  </li>\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                  >\n                    <path\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\n                    /></svg\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── main.tsx         <span class=\"comment\"># Application entry point</span>\n    ├── App.tsx          <span class=\"comment\"># Root router component</span>\n    ├── <span class=\"dir\">components/</span>\n    │   ├── <span class=\"dir\">common/</span>      <span class=\"comment\"># Reusable UI primitives</span>\n    │   └── <span class=\"dir\">layout/</span>      <span class=\"comment\"># Shared layouts</span>\n    ├── <span class=\"dir\">hooks/</span>           <span class=\"comment\"># Custom React hooks</span>\n    ├── <span class=\"dir\">context/</span>         <span class=\"comment\"># React Context providers</span>\n    ├── <span class=\"dir\">services/</span>        <span class=\"comment\"># API client and requests</span>\n    ├── <span class=\"dir\">pages/</span>           <span class=\"comment\"># Page components / routes</span>\n    └── <span class=\"dir\">assets/</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                  >\n                    <path\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\n                    /></svg\n                  >",
        "contentHtml": "<p>\n                  Ideal for rich, highly-interactive single-page applications (SPAs) where SEO is secondary. Client-side state synchronization is fast, and the code compiles to static files that can be instantly served from a CDN.\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use React",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use React when:</strong> Simple page with minimal interactivity — vanilla JS or Alpine.js is lighter. Need strict conventions without choices — Angular has more opinions. Need SSR without extra setup. Need two-way binding out of the box — Vue is more natural.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                  >\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\n                  >",
        "contentHtml": "<table class=\"fw-table\">\n                  <tr>\n                    <th>Concern</th>\n                    <th>Library</th>\n                  </tr>\n                  <tr>\n                    <td>Routing</td>\n                    <td>React Router v6</td>\n                  </tr>\n                  <tr>\n                    <td>Data Query</td>\n                    <td>TanStack Query (React Query)</td>\n                  </tr>\n                  <tr>\n                    <td>State</td>\n                    <td>Zustand / Redux Toolkit</td>\n                  </tr>\n                  <tr>\n                    <td>Bundler</td>\n                    <td>Vite</td>\n                  </tr>\n                  <tr>\n                    <td>Forms</td>\n                    <td>React Hook Form + Zod</td>\n                  </tr>\n                  <tr>\n                    <td>Testing</td>\n                    <td>Vitest + React Testing Library</td>\n                  </tr>\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "angular",
    "cat": "frontend",
    "name": "Angular",
    "icon": "NG",
    "archBadge": "Layered Architecture + Signals",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Module-based components + services in a flat Angular project.</strong> Use Angular's built-in DI and HttpClient. Each feature is a lazy-loaded module with its components and a single service. Signals for reactive state. No separate domain layer — services hold business logic directly.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/app/</span>\n├── app.module.ts          <span class=\"comment\"># Root module</span>\n├── app.component.ts\n├── <span class=\"dir\">auth/</span>\n│   ├── auth.module.ts     <span class=\"comment\"># Lazy loaded</span>\n│   ├── login.component.ts\n│   └── auth.service.ts\n├── <span class=\"dir\">dashboard/</span>\n│   ├── dashboard.module.ts\n│   ├── dashboard.component.ts\n│   └── dashboard.service.ts\n├── <span class=\"dir\">shared/</span>               <span class=\"comment\"># Pipes, directives</span>\n└── <span class=\"dir\">environments/</span>         <span class=\"comment\"># Config</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >Standalone-First Layered Architecture with Angular Signals\r\n                    and Zoneless Change Detection.</strong\r\n                  >\r\n                  Standalone Components are the default — NgModules are\r\n                  optional and discouraged for new code. Angular 19+\r\n                  <strong>zoneless change detection</strong> eliminates Zone.js\r\n                  monkey-patching; Signals (<code>signal()</code>,\r\n                  <code>computed()</code>, <code>linkedSignal()</code>,\r\n                  <code>resource()</code>) drive fine-grained reactivity directly.\r\n                  For complex apps: Hexagonal Architecture — domain logic is pure\r\n                  TypeScript, Angular's DI provides adapters.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Signals</strong> — <code>signal()</code>,\r\n                    <code>computed()</code>, <code>linkedSignal()</code>,\r\n                    <code>effect()</code> for synchronous fine-grained\r\n                    reactivity without Zone.js\r\n                  </li>\r\n                  <li>\r\n                    <strong>resource() / rxResource()</strong> — signal-based\r\n                    async data fetching with loading/error/value states built in\r\n                  </li>\r\n                  <li>\r\n                    Template expressions reading a Signal re-evaluate\r\n                    <strong>only</strong> when that Signal changes — no dirty\r\n                    checking, no full component tree traversal\r\n                  </li>\r\n                  <li>\r\n                    <code>@Input()</code> props down,\r\n                    <code>@Output()</code> events up\r\n                  </li>\r\n                  <li>\r\n                    <strong>NgRx Signals Store</strong> for structured,\r\n                    Redux-like state with signal-based selectors without RxJS\r\n                  </li>\r\n                  <li>\r\n                    <strong>Zoneless</strong> —\r\n                    <code>provideExperimentalZonelessChangeDetection()</code>\r\n                    drops Zone.js entirely (Angular 19+ stable)\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/app/</span>\n    ├── app.component.ts            <span class=\"comment\"># Root standalone component</span>\n    ├── app.routes.ts               <span class=\"comment\"># provideRouter(routes)</span>\n    ├── app.config.ts               <span class=\"comment\"># provideHttpClient(), etc.</span>\n    ├── <span class=\"dir\">core/</span>\n    │   ├── <span class=\"dir\">guards/</span>                 <span class=\"comment\"># auth.guard.ts (functional)</span>\n    │   ├── <span class=\"dir\">interceptors/</span>           <span class=\"comment\"># auth.interceptor.ts</span>\n    │   └── <span class=\"dir\">services/</span>\n    │   └── api.service.ts          <span class=\"comment\"># Base HTTP service</span>\n    ├── <span class=\"dir\">features/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── auth.routes.ts      <span class=\"comment\"># Child route definitions</span>\n    │   │   ├── <span class=\"dir\">login/</span>\n    │   │   │   ├── login.component.ts\n    │   │   │   └── login.component.html\n    │   │   ├── <span class=\"dir\">services/</span>\n    │   │   │   └── auth.service.ts\n    │   │   └── <span class=\"dir\">models/</span>\n    │   │   └── user.model.ts\n    │   ├── <span class=\"dir\">dashboard/</span>\n    │   └── <span class=\"dir\">settings/</span>\n    └── <span class=\"dir\">shared/</span>\n    ├── <span class=\"dir\">components/</span> <span class=\"comment\" ># ButtonComponent, DataTableComponent</span >\n    ├── <span class=\"dir\">directives/</span>\n    └── <span class=\"dir\">pipes/</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Angular's DI system is the most mature in frontend — it\r\n                  enables true service-layer separation where implementations\r\n                  can be swapped for testing. Signals eliminate Zone.js overhead\r\n                  and RxJS boilerplate. Standalone components remove NgModules\r\n                  ceremony. The opinionated structure reduces architectural\r\n                  variance across large teams.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Angular",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Angular when:</strong> Building a small app — Angular's ceremony (modules, services, decorators) is overkill. Team is new to TypeScript — React/Vue has lower barrier. Need maximum flexibility in structure. App is a simple dashboard with minimal routing.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>State</td>\r\n                    <td>NgRx Signals Store / Elf</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Forms</td>\r\n                    <td>Angular Reactive Forms (built-in)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Component Lib</td>\r\n                    <td>Angular Material / PrimeNG</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>Jest + ATL + Cypress</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>i18n</td>\r\n                    <td>Transloco</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>SSR</td>\r\n                    <td>@angular/ssr</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "vue",
    "cat": "frontend",
    "name": "Vue.js / Nuxt 3",
    "icon": "VU",
    "archBadge": "Composition API MVVM + Composables",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Nuxt pages + composables in a single project.</strong> Use Nuxt's auto-imports, file-based routing, and <code>useFetch</code> for data. Composables replace stores for shared logic. VueUse for utility composables. Pages are SFC files with <code>&lt;script setup&gt;</code>. Minimal configuration, convention over ceremony.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">app/</span>  (or root for Nuxt)\n├── app.vue\n├── nuxt.config.ts\n├── <span class=\"dir\">pages/</span>\n│   ├── index.vue\n│   ├── login.vue\n│   └── <span class=\"dir\">dashboard/</span>\n│       └── index.vue\n├── <span class=\"dir\">components/</span>           <span class=\"comment\"># Auto-imported</span>\n├── <span class=\"dir\">composables/</span>          <span class=\"comment\"># useAuth.ts, useApi.ts</span>\n├── <span class=\"dir\">layouts/</span>              <span class=\"comment\"># default.vue, auth.vue</span>\n└── <span class=\"dir\">server/</span>               <span class=\"comment\"># API routes</span>\n└── <span class=\"dir\">api/</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>Composition API MVVM with Composables and\r\n                  Reactivity Transform.</strong>\r\n                  <code>&lt;script setup&gt;</code> defines the ViewModel,\r\n                  <code>&lt;template&gt;</code> is the View, TypeScript\r\n                  interfaces are the Model. Vue 3.5+ <strong>Reactive Props\r\n                  Destructure</strong> (<code>defineProps</code> with\r\n                  <code>const { count = $ref } = defineProps()</code>) enables\r\n                  native reactive destructuring without <code>toRefs()</code>.\r\n                  Composables serve as reusable ViewModels. Nuxt 4 adds\r\n                  built-in <code>useScript</code> for optimized third-party\r\n                  script loading, <code>.shared/</code> directory for universal\r\n                  modules, and Vite 6 with Rolldown under the hood.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Proxy-based reactivity</strong> —\r\n                    <code>ref()</code> and <code>reactive()</code> auto-notify\r\n                    on change\r\n                  </li>\r\n                  <li>\r\n                    Unidirectional: <strong>Reactive Props Destructure</strong>\r\n                    — <code>const { count } = defineProps()</code> retains\r\n                    reactivity natively (Vue 3.5+)\r\n                  </li>\r\n                  <li>\r\n                    Composables: <code>useAuth()</code> returns\r\n                    <code>{ user, login, logout }</code>\r\n                  </li>\r\n                  <li>\r\n                    <code>useAsyncData</code> / <code>useFetch</code> for\r\n                    SSR-compatible fetching with Nuxt 4's layered server engine\r\n                  </li>\r\n                  <li><strong>Pinia</strong> for global state (SSR-safe with\r\n                    <code>$reset</code> and setup stores)</li>\r\n                  <li>\r\n                    <strong>Nitro 3</strong> server engine: 20+ deployment\r\n                    targets, zero-config, built-in <strong>useScript</strong>\r\n                    for optimized third-party loading\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">Nuxt 3 Project:</span>\n    ├── app.vue            <span class=\"comment\"># Root component</span>\n    ├── <span class=\"dir\">pages/</span>\n    │   ├── index.vue      <span class=\"comment\"># /</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── login.vue\n    │   │   └── register.vue\n    │   ├── <span class=\"dir\">dashboard/</span>\n    │   │   ├── index.vue\n    │   │   └── analytics.vue\n    │   └── <span class=\"dir\">profile/</span>\n    │   └── [id].vue       <span class=\"comment\"># Dynamic route</span>\n    ├── <span class=\"dir\">components/</span>\n    │   ├── <span class=\"dir\">ui/</span>            <span class=\"comment\"># BaseButton, BaseInput</span>\n    │   └── <span class=\"dir\">dashboard/</span>\n    ├── <span class=\"dir\">composables/</span>\n    │   ├── useAuth.ts\n    │   └── useApi.ts\n    ├── <span class=\"dir\">stores/</span>\n    │   ├── auth.ts        <span class=\"comment\"># Pinia store</span>\n    │   └── app.ts\n    ├── <span class=\"dir\">server/</span>\n    │   ├── <span class=\"dir\">api/</span>\n    │   │   └── auth/login.post.ts\n    │   ├── <span class=\"dir\">middleware/</span>\n    │   └── <span class=\"dir\">utils/</span>\n    │   └── db.ts          <span class=\"comment\"># Drizzle/Prisma</span>\n    ├── <span class=\"dir\">layouts/</span>\n    │   ├── default.vue\n    │   └── dashboard.vue\n    ├── <span class=\"dir\">middleware/</span>\n    │   └── auth.ts\n    └── nuxt.config.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Vue's Proxy reactivity tracks at property level — composables\r\n                  automatically subscribe to only the data they use. This makes\r\n                  Composition API the natural ViewModel pattern. Pinia replaces\r\n                  Vuex with simpler, type-safe API. Nuxt's Nitro supports 15+\r\n                  deployment targets with zero config.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Vue",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Vue when:</strong> Large enterprise app needing strict architecture — Angular has more built-in patterns. Team knows React and doesn't want to switch. Need the largest ecosystem of third-party libraries. App requires complex state management with strict patterns.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>State</td>\r\n                    <td>Pinia</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Styling</td>\r\n                    <td>UnoCSS / Tailwind</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Component Lib</td>\r\n                    <td>Nuxt UI / PrimeVue</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Forms</td>\r\n                    <td>VeeValidate + Zod</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>Vitest + Vue Test Utils</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>ORM</td>\r\n                    <td>Drizzle / Prisma</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "svelte",
    "cat": "frontend",
    "name": "Svelte / SvelteKit",
    "icon": "SV",
    "archBadge": "Compile-Time MVVM + Reactive Declarations",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>SvelteKit pages + stores in a single project.</strong> Use SvelteKit's file-based routing, <code>+page.server.ts</code> for data loading, and form actions for mutations. Svelte stores or runes for global state. No elaborate layering — pages load data directly and components are pure Svelte.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── app.html\n├── <span class=\"dir\">routes/</span>\n│   ├── +page.svelte       <span class=\"comment\"># Home</span>\n│   ├── +layout.svelte     <span class=\"comment\"># Root layout</span>\n│   ├── <span class=\"dir\">login/</span>\n│   │   └── +page.svelte\n│   └── <span class=\"dir\">dashboard/</span>\n│       ├── +page.svelte\n│       └── +page.server.ts <span class=\"comment\"># Load function</span>\n├── <span class=\"dir\">lib/</span>\n│   ├── <span class=\"dir\">components/</span>       <span class=\"comment\"># Shared components</span>\n│   ├── <span class=\"dir\">stores/</span>           <span class=\"comment\"># auth.svelte.ts</span>\n│   └── <span class=\"dir\">utils/</span>            <span class=\"comment\"># Helpers</span>\n└── <span class=\"dir\">lib/server/</span>           <span class=\"comment\"># DB, auth logic</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>Compile-Time MVVM with Svelte 5 Runes.</strong>\r\n                  Svelte compiles components to imperative DOM code at build\r\n                  time — no Virtual DOM overhead. Svelte 5 Runes —\r\n                  <code>$state()</code>, <code>$derived()</code>,\r\n                  <code>$effect()</code> — replace the legacy\r\n                  <code>$:</code> labels with explicit, universally-reactive\r\n                  primitives. <code>$props()</code> replaces <code>export let</code>\r\n                  for fully reactive component inputs. Runes work consistently in\r\n                  <code>.svelte.js</code> modules, not just components.\r\n                  SvelteKit adds SSR, file-based routing, and form actions.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>$state()</strong> — universal reactive variable,\r\n                    triggers precise DOM updates on mutation\r\n                  </li>\r\n                  <li>\r\n                    <strong>$derived(expr)</strong> — computed values that\r\n                    auto-recalculate when dependencies change\r\n                  </li>\r\n                  <li>\r\n                    <strong>$effect(() => { ... })</strong> — reactive side\r\n                    effects, automatically tracks dependencies\r\n                  </li>\r\n                  <li>\r\n                    <strong>$props()</strong> — component props with full\r\n                    reactivity, replaces <code>export let</code>\r\n                  </li>\r\n                  <li>\r\n                    <strong>$state.svelte.ts</strong> — reactive module-state\r\n                    that can be shared and imported anywhere\r\n                  </li>\r\n                  <li>\r\n                    SvelteKit <code>load</code> functions for SSR data fetching\r\n                    with <strong>SvelteKit 3</strong> universal load\r\n                    functions\r\n                  </li>\r\n                  <li>\r\n                    <strong>Form actions</strong> replace API routes for\r\n                    mutations — progressive enhancement by default\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n  <span class=\"dir\">src/</span>routes/\n  ├── +layout.svelte             <span class=\"comment\"># Root layout</span>\n  ├── +layout.server.ts          <span class=\"comment\"># Server-side layout data</span>\n  ├── +page.svelte               <span class=\"comment\"># Home page</span>\n  ├── +page.server.ts            <span class=\"comment\"># Server-side data fetching</span>\n  ├── <span class=\"dir\">auth/</span>\n  │   └── <span class=\"dir\">login/</span>\n  │       ├── +page.svelte\n  │       └── +page.server.ts    <span class=\"comment\"># Form actions</span>\n  │   └── <span class=\"dir\">register/</span>\n  ├── <span class=\"dir\">dashboard/</span>\n  │   ├── +layout.svelte         <span class=\"comment\"># Dashboard layout</span>\n  │   ├── +page.svelte\n  │   ├── +page.server.ts\n  │   └── <span class=\"dir\">analytics/</span>\n  │   └── <span class=\"dir\">profile/</span>\n  │   └── <span class=\"dir\">[id]/</span>\n  │       ├── +page.svelte\n  │       └── +page.server.ts\n  <span class=\"dir\">src/</span>lib/\n  ├── <span class=\"dir\">components/</span>\n  │   └── <span class=\"dir\">ui/</span>                    <span class=\"comment\"># Button, Input, DataTable</span>\n  ├── <span class=\"dir\">stores/</span>\n  │   ├── auth.ts                <span class=\"comment\"># writable<User | null>(null)</span>\n  │   └── theme.ts\n  ├── <span class=\"dir\">server/</span>\n  │   ├── db.ts                  <span class=\"comment\"># Drizzle/Prisma</span>\n  │   └── auth.ts                <span class=\"comment\"># Lucia auth</span>\n  └── <span class=\"dir\">utils/</span>\n      └── hooks.server.ts        <span class=\"comment\"># Global server hooks</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Svelte's compiler eliminates runtime overhead — compiled\r\n                  output is vanilla JS DOM ops. MVVM without ceremony:\r\n                  <code>$state()</code> and <code>$derived()</code> replace\r\n                  legacy <code>$:</code> labels with explicit reactive\r\n                  declarations that work across all <code>.svelte.js</code>\r\n                  modules. SvelteKit provides file-based routing and form\r\n                  actions with progressive enhancement built in. The DX is\r\n                  closest to \"just writing HTML and JS\" with zero boilerplate.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Svelte",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Svelte when:</strong> Need the largest ecosystem of third-party component libraries — React has more. Need enterprise-grade out-of-the-box patterns — Angular provides more structure. Team is heavily invested in React/Vue and unwilling to learn runes. Need complex SSR with ISR/PPR — Next.js is more mature for production caching.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>SSR Framework</td>\r\n                    <td>SvelteKit</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Styling</td>\r\n                    <td>Scoped CSS / Tailwind</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Forms</td>\r\n                    <td>superforms</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>Lucia Auth</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>ORM</td>\r\n                    <td>Drizzle ORM</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Component Lib</td>\r\n                    <td>Skeleton UI / shadcn-svelte</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>Vitest + Playwright</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "solidjs",
    "cat": "frontend",
    "name": "SolidJS",
    "icon": "SO",
    "archBadge": "Signal-Based Reactive MVVM",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>SolidStart routes + signals in a flat project.</strong> Use file-based routing with <code>createSignal</code> and <code>createResource</code> for data. No stores needed for small apps — signals co-located with components. API routes for mutations. Simple, reactive, zero-overhead.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── app.tsx                <span class=\"comment\"># Root component</span>\n├── <span class=\"dir\">routes/</span>\n│   ├── index.tsx          <span class=\"comment\"># Home</span>\n│   ├── login.tsx\n│   ├── <span class=\"dir\">dashboard/</span>\n│   │   └── index.tsx\n│   └── <span class=\"dir\">api/</span>              <span class=\"comment\"># API routes</span>\n├── <span class=\"dir\">components/</span>           <span class=\"comment\"># Shared UI</span>\n└── <span class=\"dir\">lib/</span>                  <span class=\"comment\"># API client, helpers</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>Signal-Based Reactive MVVM.</strong> Components run\r\n                  <strong>once</strong> — JSX template is evaluated once and\r\n                  creates DOM nodes directly bound to signals. No Virtual DOM,\r\n                  no re-rendering, no diffing. Signals are the reactive\r\n                  primitive; <code>createMemo</code> for derived state;\r\n                  <code>createEffect</code> for side effects.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Signals</strong> —\r\n                    <code>createSignal()</code> registers dependency on read,\r\n                    notifies on write\r\n                  </li>\r\n                  <li>\r\n                    <strong>Surgical DOM updates</strong> — only the specific\r\n                    text node bound to a signal updates\r\n                  </li>\r\n                  <li>\r\n                    <code>createMemo</code> = computed,\r\n                    <code>createEffect</code> = side effect runner\r\n                  </li>\r\n                  <li>\r\n                    No hooks rules — signals work in conditionals and loops\r\n                  </li>\r\n                  <li>Props down, callback props up (same as React)</li>\r\n                  <li><code>createStore</code> for nested reactive objects</li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── index.tsx                     <span class=\"comment\"># render(&lt;App /&gt;, root)</span>\n    ├── App.tsx                       <span class=\"comment\"># Router + global providers</span>\n    ├── routes.ts                     <span class=\"comment\"># @solidjs/router definitions</span>\n    ├── <span class=\"dir\">features/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── <span class=\"dir\">components/</span>\n    │   │   │   ├── LoginForm.tsx\n    │   │   │   └── RegisterForm.tsx\n    │   │   ├── <span class=\"dir\">api/</span>\n    │   │   ├── <span class=\"dir\">stores/</span>\n    │   │   │   └── authStore.ts      <span class=\"comment\"># createSignal</span>\n    │   │   └── <span class=\"dir\">types/</span>\n    │   ├── <span class=\"dir\">dashboard/</span>\n    │   └── <span class=\"dir\">profile/</span>\n    ├── <span class=\"dir\">shared/</span>\n    │   ├── <span class=\"dir\">components/</span>\n    │   └── <span class=\"dir\">utils/</span>\n    └── <span class=\"dir\">lib/</span>\n    └── <span class=\"dir\">api/</span>\n    └── client.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Solid eliminates the tension between immutable state and\r\n                  fine-grained updates. React re-runs the entire component\r\n                  function; Solid skips this — signals create subscriptions at\r\n                  the DOM level, so updates are surgical. JSX compiles to real\r\n                  DOM creation calls, not VDOM objects. Signal-based MVVM is the\r\n                  only correct architecture for Solid.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use SolidJS",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use SolidJS when:</strong> Need large ecosystem — React/Vue have more packages. Need enterprise patterns — Angular has more built-in. Need SSR with complex data fetching — Next.js/Remix more mature. Large team with varying skill levels — React/Angular have larger hiring pool.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Router</td>\r\n                    <td>@solidjs/router</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Global State</td>\r\n                    <td>Solid Stores</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Server State</td>\r\n                    <td>TanStack Query</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>SSR</td>\r\n                    <td>SolidStart</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Forms</td>\r\n                    <td>@modular-forms/solid</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>Vitest + @solidjs/testing-library</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "remix",
    "cat": "frontend",
    "name": "Remix",
    "icon": "RX",
    "archBadge": "Progressive Enhancement + Nested Routing",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Remix flat routes + loaders/actions in a single project.</strong> Use Remix's built-in data loading (<code>loader</code>) and mutations (<code>action</code>) per route. Prisma directly in loaders. No separate service layer — routes own their data. Progressive enhancement out of the box.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">app/</span>\n├── root.tsx               <span class=\"comment\"># Layout + meta</span>\n├── <span class=\"dir\">routes/</span>\n│   ├── _index.tsx         <span class=\"comment\"># Home</span>\n│   ├── login.tsx          <span class=\"comment\"># loader + action</span>\n│   ├── dashboard.tsx\n│   └── dashboard_.tsx     <span class=\"comment\"># Nested layout</span>\n├── <span class=\"dir\">components/</span>           <span class=\"comment\"># Shared UI</span>\n├── <span class=\"dir\">utils/</span>                <span class=\"comment\"># session.server.ts</span>\n└── <span class=\"dir\">db.server.ts</span>          <span class=\"comment\"># Prisma client</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>Progressive Enhancement with Nested Routing.</strong>\r\n                  Nested routes map to nested layouts. Each route exports a\r\n                  <code>loader</code> (server data) and\r\n                  <code>action</code> (server mutation). Forms use native HTML\r\n                  submission enhanced with JS. The route module is the\r\n                  controller, loader/action is the model boundary, component is\r\n                  the view.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Server-driven data flow</strong> — each loader\r\n                    returns data to <code>useLoaderData()</code>\r\n                  </li>\r\n                  <li>\r\n                    Parent + child loaders run <strong>in parallel</strong>\r\n                  </li>\r\n                  <li>\r\n                    Mutations via <code>&lt;Form method=\"post\"&gt;</code> →\r\n                    action → all loaders revalidate\r\n                  </li>\r\n                  <li>\r\n                    <code>useNavigation()</code> +\r\n                    <code>useOptimistic()</code> for optimistic UI\r\n                  </li>\r\n                  <li>\r\n                    <strong\r\n                      >No client-side state management for server data</strong\r\n                    >\r\n                    by design\r\n                  </li>\r\n                  <li>Progressive enhancement: forms work without JS</li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">app/</span>\n    ├── root.tsx <span class=\"comment\" ># &lt;html&gt;, &lt;body&gt;, &lt;Outlet&gt;</span >\n    ├── <span class=\"dir\">routes/</span>\n    │   ├── _index.tsx                  <span class=\"comment\"># Home</span>\n    │   ├── _auth.tsx                   <span class=\"comment\"># Auth layout (no URL segment)</span>\n    │   │   ├── _auth.login.tsx\n    │   │   └── _auth.register.tsx\n    │   ├── _dashboard.tsx <span class=\"comment\" ># Dashboard layout (requires auth)</span >\n    │   │   ├── _dashboard._index.tsx\n    │   │   ├── _dashboard.analytics.tsx\n    │   │   └── _dashboard.settings.tsx\n    │   ├── api.webhooks.stripe.ts      <span class=\"comment\"># Resource route (no UI)</span>\n    │   └── profile.$userId.tsx         <span class=\"comment\"># Dynamic segment</span>\n    ├── <span class=\"dir\">components/</span>\n    │   ├── <span class=\"dir\">ui/</span>\n    │   └── <span class=\"dir\">shared/</span>\n    ├── <span class=\"dir\">services/</span>\n    │   ├── auth.server.ts\n    │   ├── db.server.ts\n    │   └── session.server.ts\n    └── <span class=\"dir\">utils/</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Remix's nested routing eliminates props drilling and\r\n                  global-state-for-everything. Each route owns its data — loader\r\n                  colocated with component. Progressive enhancement means forms\r\n                  work without JS. Using Zustand/Redux for server data in Remix\r\n                  is an anti-pattern — it fights the framework's design.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Remix",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Remix when:</strong> Need purely client-side SPA — Remix is server-first by design. App has no SEO and is behind auth — plain React + Vite is simpler. Need to deploy to serverless without Remix's adapter. Team is new to SSR concepts.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>ORM</td>\r\n                    <td>Prisma / Drizzle</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>Remix Auth</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Session</td>\r\n                    <td>@remix-run/node</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Validation</td>\r\n                    <td>Zod</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Styling</td>\r\n                    <td>Tailwind CSS</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>Vitest + Playwright</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "nestjs",
    "cat": "backend",
    "name": "NestJS",
    "icon": "NE",
    "archBadge": "Hexagonal Architecture + CQRS",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Module-based controllers + services in a single NestJS project.</strong> Skip Hexagonal and CQRS patterns. Controllers delegate directly to services which call repositories via TypeORM/Prisma. DTOs for validation, Guards for auth. Use NestJS DI but keep the structure flat — one module per feature.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── main.ts                <span class=\"comment\"># bootstrap()</span>\n├── app.module.ts\n├── <span class=\"dir\">auth/</span>\n│   ├── auth.module.ts\n│   ├── auth.controller.ts\n│   ├── auth.service.ts\n│   ├── <span class=\"dir\">dto/</span>               <span class=\"comment\"># login.dto.ts</span>\n│   └── auth.guard.ts\n├── <span class=\"dir\">users/</span>\n│   ├── users.module.ts\n│   ├── users.controller.ts\n│   ├── users.service.ts\n│   └── <span class=\"dir\">entities/</span>          <span class=\"comment\"># User.entity.ts</span>\n└── <span class=\"dir\">common/</span>               <span class=\"comment\"># Shared pipes, filters</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p><strong>Hexagonal Architecture (Ports & Adapters) with CQRS and Domain-Driven Design.</strong> Controllers = inbound adapters. Services = application logic. Repository interfaces = ports. Repository implementations = outbound adapters. <code>@nestjs/cqrs</code> provides command/query separation with event handlers. Domain layer contains pure business logic with zero NestJS dependencies. Use cases orchestrate domain objects and infrastructure.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul><li><strong>HTTP Request Flow:</strong> HTTP → Middleware → Guard → Interceptor → Pipe → Controller → Service → Repository → DB</li><li><strong>CQRS Flow (when used):</strong> Command → CommandHandler → Domain Event → EventHandler (separate from HTTP pipeline)</li><li><strong>Read Models:</strong> Query handlers read from the same DB by default. For high-read workloads, add a read replica or materialized views.</li><li><strong>Services in CQRS:</strong> auth.service.ts dispatches commands via EventBus. Application services orchestrate, they don't contain business logic.</li><li><strong>Event-driven:</strong> Domain events via <code>@nestjs/cqrs</code> or EventBus for async processing</li><li><strong>DTOs + class-validator</strong> for input validation at boundary with automatic Swagger generation</li><li><strong>Guards</strong> for auth (JWT, API key), <strong>Interceptors</strong> for logging/metrics/caching, <strong>Filters</strong> for exception handling</li><li><strong>DI container</strong> wires interfaces to implementations — swap Prisma for TypeORM without changing business logic</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── main.ts                              <span class=\"comment\"># bootstrap(), global pipes/interceptors</span>\n    ├── app.module.ts                        <span class=\"comment\"># Root module</span>\n    ├── <span class=\"dir\">common/</span>\n    │   ├── <span class=\"dir\">decorators/</span>                    <span class=\"comment\"># @CurrentUser(), @Roles()</span>\n    │   ├── <span class=\"dir\">guards/</span>                        <span class=\"comment\"># JwtAuthGuard, ThrottlerGuard</span>\n    │   ├── <span class=\"dir\">interceptors/</span>                  <span class=\"comment\"># TransformInterceptor, LoggingInterceptor</span>\n    │   ├── <span class=\"dir\">filters/</span>                       <span class=\"comment\"># AllExceptionsFilter</span>\n    │   ├── <span class=\"dir\">pipes/</span>                         <span class=\"comment\"># ValidationPipe</span>\n    │   └── <span class=\"dir\">dto/</span>                           <span class=\"comment\"># PaginationDto, ApiResponse</span>\n    ├── <span class=\"dir\">domain/</span>                             <span class=\"comment\"># Pure business logic — zero NestJS deps</span>\n    │   ├── <span class=\"dir\">entities/</span>                      <span class=\"comment\"># User, Order (domain objects)</span>\n    │   ├── <span class=\"dir\">value-objects/</span>                 <span class=\"comment\"># Email, Money, OrderId</span>\n    │   ├── <span class=\"dir\">events/</span>                        <span class=\"comment\"># OrderCreatedEvent, UserRegisteredEvent</span>\n    │   └── <span class=\"dir\">interfaces/</span>                    <span class=\"comment\"># IUserRepository (port)</span>\n    ├── <span class=\"dir\">application/</span>                       <span class=\"comment\"># Use cases / orchestration</span>\n    │   ├── <span class=\"dir\">commands/</span>\n    │   │   ├── create-order.command.ts\n    │   │   └── create-order.handler.ts\n    │   ├── <span class=\"dir\">queries/</span>\n    │   │   ├── get-order.query.ts\n    │   │   └── get-order.handler.ts\n    │   └── <span class=\"dir\">events/</span>\n    │       └── order-created.handler.ts\n    ├── <span class=\"dir\">modules/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── auth.module.ts\n    │   │   ├── auth.controller.ts           <span class=\"comment\"># Inbound adapter</span>\n    │   │   ├── auth.service.ts              <span class=\"comment\"># Application logic</span>\n    │   │   ├── <span class=\"dir\">strategies/</span>                <span class=\"comment\"># JwtStrategy (Passport)</span>\n    │   │   └── <span class=\"dir\">dto/</span>                       <span class=\"comment\"># login.dto.ts</span>\n    │   ├── <span class=\"dir\">users/</span>\n    │   │   ├── users.module.ts\n    │   │   ├── users.controller.ts\n    │   │   ├── users.service.ts\n    │   │   └── <span class=\"dir\">repositories/</span>\n    │   │       └── user.repository.ts       <span class=\"comment\"># Implements IUserRepository</span>\n    │   └── <span class=\"dir\">orders/</span>\n    │       ├── orders.module.ts\n    │       ├── orders.controller.ts\n    │       └── <span class=\"dir\">repositories/</span>\n    │           └── order.repository.ts\n    └── <span class=\"dir\">infrastructure/</span>\n        ├── <span class=\"dir\">database/</span>\n        │   ├── prisma.service.ts\n        │   └── migrations/\n        ├── <span class=\"dir\">cache/</span>\n        │   └── redis.module.ts\n        ├── <span class=\"dir\">messaging/</span>\n        │   └── event-bus.ts\n        └── <span class=\"dir\">config/</span>\n            └── configuration.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p><strong>Don't use NestJS when:</strong> Your team is under 5 people and the domain is simple — CQRS and Hexagonal Architecture add real overhead. Your API is purely CRUD with no business logic — Express or Fastify is faster. You prefer functional composition — NestJS's decorator-heavy style is opinionated. You're building a prototype — NestJS's ceremony slows rapid iteration. — the foundation of Hexagonal Architecture. Decorators make dependency graph explicit and testable. CQRS only makes sense when read and write patterns genuinely differ. If they don't, you're adding complexity for no value.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>ORM</td><td>Prisma / TypeORM</td></tr><tr><td>Validation</td><td>class-validator + class-transformer</td></tr><tr><td>Auth</td><td>@nestjs/jwt + @nestjs/passport</td></tr><tr><td>CQRS</td><td>@nestjs/cqrs</td></tr><tr><td>API Docs</td><td>@nestjs/swagger</td></tr><tr><td>Logging</td><td>nestjs-pino</td></tr><tr><td>Cache</td><td>@nestjs/cache-manager + Redis</td></tr><tr><td>Testing</td><td>Jest + @nestjs/testing + Supertest</td></tr><tr><td>Monorepo</td><td>NestJS CLI + Nx (optional)</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "spring-boot",
    "cat": "backend",
    "name": "Spring Boot",
    "icon": "SP",
    "archBadge": "Layered / Hexagonal + DDD",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Layered Controller → Service → Repository in a single Spring Boot module.</strong> Skip Hexagonal/ports. Controllers call services, services call Spring Data JPA repositories. <code>@Transactional</code> at service layer. DTOs mapped with ModelMapper. Simple, standard Spring — the way most production apps actually start.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/main/java/com/example/</span>\n├── Application.java\n├── <span class=\"dir\">controller/</span>\n│   ├── AuthController.java\n│   └── UserController.java\n├── <span class=\"dir\">service/</span>\n│   ├── AuthService.java\n│   └── UserService.java\n├── <span class=\"dir\">repository/</span>\n│   └── UserRepository.java  <span class=\"comment\"># Spring Data JPA</span>\n├── <span class=\"dir\">model/</span>\n│   ├── entity/User.java\n│   └── dto/LoginRequest.java\n├── <span class=\"dir\">config/</span>               <span class=\"comment\"># Security, web config</span>\n└── <span class=\"dir\">exception/</span>            <span class=\"comment\"># Global handler</span>\n<span class=\"dir\">src/main/resources/</span>\n├── application.yml\n└── db/migration/          <span class=\"comment\"># Flyway scripts</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >Layered Architecture (Controller → Service → Repository)\r\n                    with Hexagonal variant.</strong\r\n                  >\r\n                  Controllers expose endpoints, Services hold business logic\r\n                  (transactional boundary), Repositories abstract persistence.\r\n                  For complex domains: domain entities and port interfaces live\r\n                  in the domain package with zero Spring dependency.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → DispatcherServlet → Controller → @Valid →\r\n                      @Transactional Service → Repository → JPA → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>\r\n                    <code>@Transactional</code> demarcates service as\r\n                    consistency boundary\r\n                  </li>\r\n                  <li>Controllers never access Repositories directly</li>\r\n                  <li>\r\n                    Reactive variant: Spring WebFlux with\r\n                    <code>Mono</code>/<code>Flux</code> streams\r\n                  </li>\r\n                  <li>\r\n                    Events via <code>ApplicationEventPublisher</code> or Spring\r\n                    Cloud Stream\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/main/java/com/example/app/</span>\n    ├── AppApplication.java                      <span class=\"comment\"># @SpringBootApplication</span>\n    ├── <span class=\"dir\">config/</span>\n    │   ├── SecurityConfig.java                  <span class=\"comment\"># Spring Security filter chain</span>\n    │   └── WebConfig.java\n    ├── <span class=\"dir\">common/</span>\n    │   ├── <span class=\"dir\">exception/</span>\n    │   │   └── GlobalExceptionHandler.java      <span class=\"comment\"># @RestControllerAdvice</span>\n    │   └── <span class=\"dir\">dto/</span>\n    │   └── ApiResponse.java\n    ├── <span class=\"dir\">module/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── <span class=\"dir\">controller/</span>\n    │   │   │   └── AuthController.java          <span class=\"comment\"># @RestController</span>\n    │   │   ├── <span class=\"dir\">service/</span>\n    │   │   │   ├── AuthService.java             <span class=\"comment\"># Interface (port)</span>\n    │   │   │   └── AuthServiceImpl.java         <span class=\"comment\"># @Service</span>\n    │   │   ├── <span class=\"dir\">repository/</span>\n    │   │   │   └── UserRepository.java          <span class=\"comment\"># Spring Data JPA</span>\n    │   │   ├── <span class=\"dir\">dto/</span>\n    │   │   │   └── LoginRequest.java\n    │   │   ├── <span class=\"dir\">model/</span>\n    │   │   │   └── User.java                    <span class=\"comment\"># @Entity</span>\n    │   │   └── <span class=\"dir\">mapper/</span>\n    │   │   └── UserMapper.java                  <span class=\"comment\"># MapStruct</span>\n    │   ├── <span class=\"dir\">user/</span>\n    │   └── <span class=\"dir\">order/</span>\n    └── resources/\n    ├── application.yml\n    └── db/migration/                            <span class=\"comment\"># Flyway</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Spring's IoC container (20+ years battle-tested) makes layered\r\n                  architecture automatic. <code>@Transactional</code> at the\r\n                  service layer ensures the service is the consistency boundary.\r\n                  Spring Data JPA eliminates repository boilerplate.\r\n                  <code>@Profile</code> annotations allow swapping adapter\r\n                  implementations for testing vs production.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Spring Boot",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Spring Boot when:</strong> Simple REST API with minimal logic — Spring's ceremony is overkill. Need fast startup for serverless/FaaS — Spring's cold start is slow. Team is new to Java — Node.js/Python has lower barrier. Microservice needing minimal footprint.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>ORM</td>\r\n                    <td>Spring Data JPA / R2DBC</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Security</td>\r\n                    <td>Spring Security + OAuth2</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>API Docs</td>\r\n                    <td>springdoc-openapi</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Migration</td>\r\n                    <td>Flyway / Liquibase</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Mapping</td>\r\n                    <td>MapStruct</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Monitoring</td>\r\n                    <td>Actuator + Micrometer</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>JUnit 5 + Testcontainers</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "dotnet",
    "cat": "backend",
    "name": ".NET Core (ASP.NET)",
    "icon": ".N",
    "archBadge": "Clean Architecture + CQRS/MediatR",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Controllers + Services in a single ASP.NET Core project.</strong> Skip Clean Architecture / MediatR. Controllers call services directly via DI. EF Core DbContext in the same project. Minimal APIs for simple endpoints. Standard <code>builder.Services.AddScoped&lt;IUserService, UserService&gt;()</code> wiring.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── Program.cs             <span class=\"comment\"># Minimal hosting + DI</span>\n├── <span class=\"dir\">Controllers/</span>\n│   ├── AuthController.cs\n│   └── UserController.cs\n├── <span class=\"dir\">Services/</span>\n│   ├── IAuthService.cs\n│   ├── AuthService.cs\n│   └── UserService.cs\n├── <span class=\"dir\">Models/</span>\n│   ├── User.cs            <span class=\"comment\"># EF entity</span>\n│   └── LoginRequest.cs\n├── <span class=\"dir\">Data/</span>\n│   └── AppDbContext.cs\n└── <span class=\"dir\">Middleware/</span>            <span class=\"comment\"># Exception handler</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>Clean Architecture with CQRS/MediatR.</strong> Domain\r\n                  layer has zero framework dependencies. Application layer\r\n                  defines use cases via MediatR command/query handlers.\r\n                  Infrastructure implements persistence (EF Core), external\r\n                  services. Presentation (Web API) exposes HTTP endpoints.\r\n                  Project references enforce layer boundaries at compile time.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → Controller → MediatR Pipeline → Handler →\r\n                      Repository → EF Core → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>\r\n                    MediatR pipeline behaviors: validation (FluentValidation),\r\n                    logging, caching\r\n                  </li>\r\n                  <li>\r\n                    CQRS: write models (commands → domain entities) vs read\r\n                    models (queries → DTOs/Dapper)\r\n                  </li>\r\n                  <li>\r\n                    Domain events dispatched via\r\n                    <code>INotification</code> after transaction commits\r\n                  </li>\r\n                  <li>AutoMapper/Mapster for entity → DTO transformation</li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── <span class=\"dir\">Domain/</span>                                 <span class=\"comment\"># Zero dependencies</span>\n    │   ├── <span class=\"dir\">Entities/</span>\n    │   │   ├── User.cs\n    │   │   └── Order.cs\n    │   ├── <span class=\"dir\">ValueObjects/</span>\n    │   ├── <span class=\"dir\">Events/</span>\n    │   │   └── OrderCreatedEvent.cs\n    │   └── <span class=\"dir\">Interfaces/</span>\n    │   ├── IUserRepository.cs                  <span class=\"comment\"># Port</span>\n    │   └── IUnitOfWork.cs\n    ├── <span class=\"dir\">Application/</span>                            <span class=\"comment\"># Depends on Domain only</span>\n    │   ├── <span class=\"dir\">Common/</span>\n    │   │   ├── <span class=\"dir\">Behaviours/</span>\n    │   │   │   ├── ValidationBehaviour.cs      <span class=\"comment\"># MediatR pipeline</span>\n    │   │   │   └── LoggingBehaviour.cs\n    │   │   └── <span class=\"dir\">Mappings/</span>\n    │   │   └── MappingProfile.cs\n    │   ├── <span class=\"dir\">Features/</span>\n    │   │   ├── <span class=\"dir\">Auth/</span>\n    │   │   │   └── <span class=\"dir\">Commands/</span>\n    │   │   │   └── <span class=\"dir\">Login/</span>\n    │   │   │   ├── LoginCommand.cs\n    │   │   │   ├── LoginCommandHandler.cs\n    │   │   │   ├── LoginCommandValidator.cs\n    │   │   │   └── LoginResponse.cs\n    │   │   ├── <span class=\"dir\">Users/</span>\n    │   │   └── <span class=\"dir\">Orders/</span>\n    │   └── DependencyInjection.cs\n    ├── <span class=\"dir\">Infrastructure/</span>                         <span class=\"comment\"># Depends on Application</span>\n    │   ├── <span class=\"dir\">Persistence/</span>\n    │   │   ├── ApplicationDbContext.cs\n    │   │   ├── <span class=\"dir\">Repositories/</span>\n    │   │   │   └── UserRepository.cs           <span class=\"comment\"># Adapter</span>\n    │   │   └── <span class=\"dir\">Migrations/</span>\n    │   └── <span class=\"dir\">Identity/</span>\n    └── <span class=\"dir\">WebApi/</span>                                 <span class=\"comment\"># Depends on App + Infra</span>\n    ├── <span class=\"dir\">Controllers/</span>\n    │   ├── ApiControllerBase.cs                <span class=\"comment\"># Delegates to MediatR</span>\n    │   └── AuthController.cs\n    └── Program.cs\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  .NET's project system enforces layer separation at compile\r\n                  time — Domain physically cannot reference Infrastructure.\r\n                  MediatR decouples controllers from handlers; each use case is\r\n                  independently testable. FluentValidation keeps validation\r\n                  colocated with commands. The pipeline behavior pattern keeps\r\n                  handlers clean.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use .NET",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use .NET when:</strong> Need to deploy to Linux without Docker — historically Windows-centric. Team is new to C# — Node.js/Python has lower barrier. Need maximum performance with minimal memory — Go or Rust is more efficient. Simple API with no complex domain.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>CQRS</td>\r\n                    <td>MediatR</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>ORM</td>\r\n                    <td>Entity Framework Core</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Validation</td>\r\n                    <td>FluentValidation</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Mapping</td>\r\n                    <td>AutoMapper / Mapster</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>ASP.NET Identity + JWT</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Logging</td>\r\n                    <td>Serilog + Seq</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>xUnit + Moq + Testcontainers</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Jobs</td>\r\n                    <td>Hangfire / Quartz.NET</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "express",
    "cat": "backend",
    "name": "Express / Fastify",
    "icon": "EX",
    "archBadge": "3-Tier Service Layer",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Route files + service functions in a single Express/Fastify project.</strong> Each route file exports handlers that call service functions. No controllers, no DI framework — just functions importing functions. Drizzle or Prisma for data access. Simple middleware for auth and validation.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── index.ts               <span class=\"comment\"># App entry + middleware</span>\n├── <span class=\"dir\">routes/</span>\n│   ├── auth.ts            <span class=\"comment\"># POST /login, /register</span>\n│   ├── users.ts\n│   └── index.ts           <span class=\"comment\"># Route aggregator</span>\n├── <span class=\"dir\">services/</span>\n│   ├── auth.service.ts\n│   └── user.service.ts\n├── <span class=\"dir\">middleware/</span>\n│   └── auth.ts            <span class=\"comment\"># JWT verify</span>\n├── <span class=\"dir\">db/</span>\n│   ├── schema.ts          <span class=\"comment\"># Drizzle schema</span>\n│   └── index.ts           <span class=\"comment\"># Client singleton</span>\n└── <span class=\"dir\">utils/</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>3-Tier Service Layer (Lightweight).</strong>\r\n                  Unopinionated HTTP frameworks — provide routing and\r\n                  middleware, nothing more. Standard structure: Routes (HTTP) →\r\n                  Services (business logic) → Data Access (repositories/ORM). No\r\n                  built-in DI — dependency wiring via constructor injection in\r\n                  plain modules.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → Route Handler → Validation (Zod) → Service →\r\n                      Repository → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>Express: <code>req/res/next</code> callbacks</li>\r\n                  <li>\r\n                    Fastify: schema-based validation at route level + plugin\r\n                    encapsulation\r\n                  </li>\r\n                  <li>\r\n                    State lives in the database — Redis for shared state/caching\r\n                  </li>\r\n                  <li>\r\n                    Fastify's <code>decorate</code> and\r\n                    <code>register</code> for lightweight plugin composition\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── index.ts                        <span class=\"comment\"># createServer() + listen()</span>\n    ├── app.ts <span class=\"comment\" ># Express/Fastify instance + middleware</span >\n    ├── <span class=\"dir\">config/</span>\n    │   ├── index.ts                    <span class=\"comment\"># Env validation (Zod schema)</span>\n    │   └── database.ts\n    ├── <span class=\"dir\">routes/</span>\n    │   ├── auth.routes.ts\n    │   ├── users.routes.ts\n    │   └── orders.routes.ts\n    ├── <span class=\"dir\">controllers/</span> <span class=\"comment\" ># Thin: validate → service → response</span >\n    │   ├── auth.controller.ts\n    │   └── users.controller.ts\n    ├── <span class=\"dir\">services/</span> <span class=\"comment\" ># Business logic (framework-independent)</span >\n    │   ├── auth.service.ts\n    │   └── users.service.ts\n    ├── <span class=\"dir\">repositories/</span>                   <span class=\"comment\"># Data access layer</span>\n    │   └── user.repository.ts\n    ├── <span class=\"dir\">middleware/</span>\n    │   ├── auth.middleware.ts\n    │   ├── error.middleware.ts\n    │   └── validate.middleware.ts      <span class=\"comment\"># Zod schema validation</span>\n    ├── <span class=\"dir\">validators/</span>\n    │   └── auth.schema.ts              <span class=\"comment\"># Zod schemas</span>\n    └── <span class=\"dir\">utils/</span>\n    ├── apiError.ts\n    └── logger.ts                       <span class=\"comment\"># Pino</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  The 3-tier service layer is the minimum viable structure\r\n                  preventing route handlers from becoming God Functions.\r\n                  Controllers are intentionally thin. Services are plain TS\r\n                  functions with no framework dependency — testable in\r\n                  isolation. Fastify is the superior choice for new projects:\r\n                  2-3x faster, better TypeScript support, schema-based\r\n                  validation built-in.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Express",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Express when:</strong> Need built-in TypeScript support — Fastify is faster and has better TS. Need high performance with strict schema validation — Fastify's JSON schema is faster. Need structured error handling — NestJS provides more conventions.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Express</th>\r\n                    <th>Fastify</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Validation</td>\r\n                    <td>Zod middleware</td>\r\n                    <td>JSON Schema + Zod</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>ORM</td>\r\n                    <td colspan=\"2\">Drizzle / Prisma</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>Passport.js</td>\r\n                    <td>@fastify/jwt</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Logging</td>\r\n                    <td>Pino</td>\r\n                    <td>Pino (built-in)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>API Docs</td>\r\n                    <td>swagger-jsdoc</td>\r\n                    <td>@fastify/swagger</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td colspan=\"2\">Vitest + supertest / light-my-request</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "go-fiber",
    "cat": "backend",
    "name": "Go / Fiber",
    "icon": "GO",
    "archBadge": "Package-by-Feature + Interface DI",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Handler functions + services in a single Go package layout.</strong> Use <code>main.go</code> for bootstrapping, <code>handlers/</code> for route handlers, <code>services/</code> for business logic. SQLC or GORM for data access. Interfaces for testability but no separate domain module — just clean Go code.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">cmd/</span>\n└── <span class=\"dir\">server/</span>\n└── main.go            <span class=\"comment\"># Fiber app + routes</span>\n<span class=\"dir\">internal/</span>\n├── <span class=\"dir\">handlers/</span>\n│   ├── auth.go            <span class=\"comment\"># Login, Register</span>\n│   └── user.go\n├── <span class=\"dir\">services/</span>\n│   ├── auth.go\n│   └── user.go\n├── <span class=\"dir\">models/</span>               <span class=\"comment\"># Structs</span>\n│   └── user.go\n├── <span class=\"dir\">database/</span>             <span class=\"comment\"># DB connection</span>\n│   └── db.go\n└── <span class=\"dir\">middleware/</span>\n└── auth.go\ngo.mod\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong>Package-by-Feature with Interface-Based DI.</strong>\r\n                  Go's philosophy favors simplicity over elaborate patterns.\r\n                  Each feature package exports a <code>Service</code> interface\r\n                  and implementation. The <code>main</code> function constructs\r\n                  the dependency graph. Go's implicit interface satisfaction\r\n                  eliminates explicit \"implements\" declarations.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → Handler → Validate (struct tags) → Service →\r\n                      Repository → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>\r\n                    <strong>Structured logging with <code>log/slog</code></strong>\r\n                    — Go 1.24+ standard library; leveled logging\r\n                    (<code>slog.Info</code>, <code>slog.Error</code>), structured\r\n                    key-value pairs, and <code>slog.SetDefault()</code> for\r\n                    global handler; zero external dependencies\r\n                  </li>\r\n                  <li>\r\n                    Explicit error handling — return <code>error</code> as last\r\n                    value; Go 1.24 enhanced <code>errors.Join</code> for\r\n                    multi-error composition\r\n                  </li>\r\n                  <li>\r\n                    No DI container — <code>main</code> constructs all\r\n                    dependencies; interfaces defined at the call site\r\n                    (Consumer-side interfaces)\r\n                  </li>\r\n                  <li>Goroutines handle concurrency; channels coordinate</li>\r\n                  <li>\r\n                    Fiber middleware chain: auth, logging, CORS, rate limiting,\r\n                    recovery\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">cmd/server/</span>\n    └── main.go                         <span class=\"comment\"># Wire dependencies, start Fiber</span>\n    <span class=\"dir\">internal/</span>\n    ├── <span class=\"dir\">auth/</span>\n    │   ├── handler.go                  <span class=\"comment\"># Fiber handlers</span>\n    │   ├── service.go                  <span class=\"comment\"># Service interface + impl</span>\n    │   ├── repository.go               <span class=\"comment\"># Repository interface</span>\n    │   ├── repository_postgres.go      <span class=\"comment\"># PostgreSQL impl</span>\n    │   ├── models.go                   <span class=\"comment\"># Request/response DTOs</span>\n    │   └── middleware.go               <span class=\"comment\"># Auth middleware</span>\n    ├── <span class=\"dir\">user/</span>\n    │   └── ...                         <span class=\"comment\"># same structure</span>\n    ├── <span class=\"dir\">order/</span>\n    │   └── ...\n    ├── <span class=\"dir\">common/</span>\n    │   ├── <span class=\"dir\">errors/</span>                     <span class=\"comment\"># Custom error types</span>\n    │   ├── <span class=\"dir\">validator/</span>\n    │   ├── <span class=\"dir\">middleware/</span>                 <span class=\"comment\"># Logger, CORS, rate limit</span>\n    │   └── <span class=\"dir\">response/</span>\n    ├── <span class=\"dir\">infra/</span>\n    │   ├── <span class=\"dir\">database/</span>\n    │   │   ├── postgres.go             <span class=\"comment\"># Connection pool</span>\n    │   │   └── <span class=\"dir\">migrations/</span>\n    │   ├── <span class=\"dir\">redis/</span>\n    │   └── <span class=\"dir\">config/</span>\n    └── <span class=\"dir\">generated/</span>\n    └── <span class=\"dir\">sqlc/</span>                           <span class=\"comment\"># sqlc generated code</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Go's implicit interfaces are the key enabler — any struct\r\n                  satisfying the method signature is accepted. This is\r\n                  effectively Ports and Adapters without the ceremony.\r\n                  Package-by-feature prevents circular imports (compiler\r\n                  enforced). Over-engineering Go with elaborate layering\r\n                  violates the \"a little copying is better than a little\r\n                  dependency\" proverb.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Go/Fiber",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Go/Fiber when:</strong> Team is new to Go — Node.js/Python has lower barrier. Need rich web framework ecosystem — Node.js has more. Need complex ORM patterns — Prisma/TypeORM with Node.js is more mature. Rapid prototyping with minimal boilerplate.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>HTTP</td>\r\n                    <td>Fiber v3</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Query Builder</td>\r\n                    <td>sqlc (type-safe SQL)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Migration</td>\r\n                    <td>golang-migrate / goose</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Validation</td>\r\n                    <td>go-playground/validator</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>golang-jwt/jwt</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Logging</td>\r\n                    <td>zerolog / slog</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>testify + testcontainers-go</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>DI</td>\r\n                    <td>Manual (main function)</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "rails",
    "cat": "backend",
    "name": "Ruby on Rails",
    "icon": "RB",
    "archBadge": "MVC + Service Objects",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Standard Rails MVC + service objects where needed.</strong> Use Rails conventions: models with ActiveRecord, controllers for request handling, views with ERB/HAML. Add service objects only for complex operations. Hotwire (Turbo + Stimulus) for interactivity. No DDD, no elaborate layering — Rails' defaults are the small-project architecture.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">app/</span>\n├── <span class=\"dir\">controllers/</span>\n│   ├── application_controller.rb\n│   ├── sessions_controller.rb\n│   └── users_controller.rb\n├── <span class=\"dir\">models/</span>\n│   ├── application_record.rb\n│   └── user.rb\n├── <span class=\"dir\">views/</span>\n│   ├── <span class=\"dir\">layouts/</span>\n│   ├── <span class=\"dir\">sessions/</span>\n│   └── <span class=\"dir\">users/</span>\n├── <span class=\"dir\">services/</span>             <span class=\"comment\"># Only if needed</span>\n├── <span class=\"dir\">javascript/</span>           <span class=\"comment\"># Stimulus controllers</span>\n└── <span class=\"dir\">helpers/</span>\n<span class=\"dir\">config/</span>\n├── routes.rb\n└── database.yml\n<span class=\"dir\">db/</span>\n└── migrate/\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >Convention over Configuration MVC with Service\r\n                    Objects.</strong\r\n                  >\r\n                  Controllers handle HTTP, Models encapsulate data + persistence\r\n                  (ActiveRecord), Views (ERB/Hotwire) render HTML. For complex\r\n                  logic: Service Objects (plain Ruby classes — POROs). \"Fat\r\n                  Model, Skinny Controller\" evolved with service layer\r\n                  extraction.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → Router → Controller → ActiveRecord queries → DB →\r\n                      Model → View → HTML</strong\r\n                    >\r\n                  </li>\r\n                  <li>ActiveRecord callbacks/validations in the model; Rails 8\r\n                    adds <strong>composite primary keys</strong> and\r\n                    <strong>async query methods</strong></li>\r\n                  <li>\r\n                    Service objects: <code>CheckoutService.new.call</code> for\r\n                    multi-model orchestration\r\n                  </li>\r\n                  <li>\r\n                    <strong>Solid Queue</strong> — database-backed job\r\n                    processing built into Rails 8; replaces Redis dependency for\r\n                    background jobs\r\n                  </li>\r\n                  <li>\r\n                    <strong>Hotwire</strong> (Turbo Streams + Stimulus):\r\n                    real-time DOM updates, minimal JS\r\n                  </li>\r\n                  <li>\r\n                    <strong>Kamal 2</strong> — zero-downtime Docker deployments\r\n                    with rolling updates, built-in SSL, and accessory services;\r\n                    replace Kubernetes for most apps\r\n                  </li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">app/</span>\n    ├── <span class=\"dir\">controllers/</span>\n    │   ├── application_controller.rb\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── sessions_controller.rb\n    │   │   └── registrations_controller.rb\n    │   ├── users_controller.rb\n    │   └── orders_controller.rb\n    ├── <span class=\"dir\">models/</span>\n    │   ├── user.rb <span class=\"comment\" ># validations, associations, scopes</span >\n    │   ├── order.rb\n    │   └── <span class=\"dir\">concerns/</span>\n    ├── <span class=\"dir\">services/</span>        <span class=\"comment\"># Business logic POROs</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   └── authentication_service.rb\n    │   ├── <span class=\"dir\">orders/</span>\n    │   │   ├── checkout_service.rb\n    │   │   └── fulfillment_service.rb\n    │   └── <span class=\"dir\">notifications/</span>\n    ├── <span class=\"dir\">jobs/</span>            <span class=\"comment\"># Active Job (Sidekiq)</span>\n    ├── <span class=\"dir\">views/</span>\n    │   ├── <span class=\"dir\">layouts/</span>\n    │   └── <span class=\"dir\">users/</span>\n    ├── <span class=\"dir\">javascript/</span>      <span class=\"comment\"># Hotwire / Stimulus</span>\n    │   └── <span class=\"dir\">controllers/</span>\n    ├── <span class=\"dir\">channels/</span>        <span class=\"comment\"># Action Cable (WebSockets)</span>\n    └── <span class=\"dir\">policies/</span>        <span class=\"comment\"># Pundit authorization</span>\n    <span class=\"dir\">config/</span>\n    └── routes.rb\n    <span class=\"dir\">db/</span>\n    ├── migrate/\n    ├── schema.rb\n    └── seeds.rb\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Rails' conventions eliminate architectural decision fatigue —\r\n                  the directory structure <em>is</em> the architecture.\r\n                  ActiveRecord colocates validations, callbacks, scopes, and\r\n                  associations with data. Service objects extract logic when\r\n                  models become too fat. Hotwire enables rich, reactive UIs with\r\n                  server-rendered HTML. Rails 8 bakes in <strong>Solid Queue\r\n                  </strong> (DB-backed jobs), <strong>Solid Cache</strong>\r\n                  (DB-backed caching), and <strong>Kamal 2</strong>\r\n                  (zero-dependency Docker deployments) — one server can run\r\n                  everything without Redis, Sidekiq, or Kubernetes.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Rails",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Rails when:</strong> Need high concurrency — Rails' threading is limited vs Go/Node.js. App is API-only with no views — MVC overhead unnecessary. Need to scale horizontally — Rails' stateful nature complicates scaling. Need strict TypeScript patterns.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>Devise / Rails 8 built-in</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Authorization</td>\r\n                    <td>Pundit / Action Policy</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Background Jobs</td>\r\n                    <td>Solid Queue (DB-backed, Rails 8 default)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Caching</td>\r\n                    <td>Solid Cache (DB-backed, Rails 8 default)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Cable (WS)</td>\r\n                    <td>Solid Cable (DB-backed, Rails 8 default)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>API</td>\r\n                    <td>Blueprinter / Jbuilder</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Search</td>\r\n                    <td>pg_search / Meilisearch</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Frontend</td>\r\n                    <td>Hotwire (Turbo + Stimulus)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>RSpec + FactoryBot + Faker</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Deploy</td>\r\n                    <td>Kamal 2 (Docker, zero-downtime)</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "django",
    "cat": "backend",
    "name": "Django",
    "icon": "DJ",
    "archBadge": "MTV + Service Layer",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Standard Django MTV with apps per feature.</strong> Use Django's built-in ORM, admin, auth, and templating. Each Django \"app\" is a feature with its models, views, and templates. Class-based views for CRUD, function views for custom logic. No service layer — views call models directly. Django's defaults win for small projects.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">config/</span>\n├── settings.py\n├── urls.py                <span class=\"comment\"># Root URL conf</span>\n└── wsgi.py\n<span class=\"dir\">apps/</span>\n├── <span class=\"dir\">accounts/</span>\n│   ├── models.py\n│   ├── views.py\n│   ├── urls.py\n│   ├── forms.py\n│   └── templates/\n├── <span class=\"dir\">dashboard/</span>\n│   ├── models.py\n│   ├── views.py\n│   └── templates/\n├── <span class=\"dir\">core/</span>                 <span class=\"comment\"># Shared utils</span>\n│   └── mixins.py\nmanage.py\nrequirements.txt\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >MTV (Model-Template-View) with Service Layer\r\n                    Extraction.</strong\r\n                  >\r\n                  Models (ORM + business rules), Templates (HTML rendering),\r\n                  Views (request handlers). The 2026 standard adds a Service\r\n                  Layer between Views and Models for complex business logic,\r\n                  keeping views thin and models focused on data concerns.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → URL Router → View → Form/Serializer validation →\r\n                      Service → Model/ORM → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>Django ORM: \"Active Record on steroids\" with async\r\n                    support (<code>async for</code>, <code>aget()</code>,\r\n                    <code>abulk_create()</code>) in Django 5.1+\r\n                  </li>\r\n                  <li>\r\n                    <strong>Async views</strong> —\r\n                    <code>async def</code> views with native async ORM queries;\r\n                    deploy via ASGI (Daphne/Uvicorn)\r\n                  </li>\r\n                  <li>\r\n                    DRF serializers handle validation, transformation, JSON\r\n                    rendering\r\n                  </li>\r\n                  <li>\r\n                    <strong>HTMX integration</strong> — hypermedia-driven\r\n                    interactivity without a JavaScript framework; Django views\r\n                    return HTML fragments, HTMX swaps DOM\r\n                  </li>\r\n                  <li>Django signals for event hooks; Celery / Dramatiq for\r\n                    background tasks</li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">project/</span>\n    ├── manage.py\n    ├── <span class=\"dir\">config/</span>\n    │   ├── <span class=\"dir\">settings/</span>\n    │   │   ├── base.py\n    │   │   ├── development.py\n    │   │   └── production.py\n    │   └── urls.py\n    ├── <span class=\"dir\">apps/</span>\n    │   ├── <span class=\"dir\">accounts/</span>\n    │   │   ├── models.py           <span class=\"comment\"># User, Profile</span>\n    │   │   ├── admin.py\n    │   │   ├── urls.py\n    │   │   ├── views.py            <span class=\"comment\"># Thin: delegate to services</span>\n    │   │   ├── forms.py\n    │   │   ├── serializers.py      <span class=\"comment\"># DRF serializers</span>\n    │   │   ├── services.py         <span class=\"comment\"># Business logic POROs</span>\n    │   │   ├── selectors.py        <span class=\"comment\"># Read-only query logic</span>\n    │   │   ├── signals.py\n    │   │   ├── <span class=\"dir\">tests/</span>\n    │   │   └── <span class=\"dir\">migrations/</span>\n    │   ├── <span class=\"dir\">orders/</span>\n    │   ├── <span class=\"dir\">products/</span>\n    │   └── <span class=\"dir\">notifications/</span>\n    │   ├── services.py\n    │   └── tasks.py                <span class=\"comment\"># Celery tasks</span>\n    ├── <span class=\"dir\">common/</span>\n    │   ├── <span class=\"dir\">middleware/</span>\n    │   ├── permissions.py\n    │   └── exceptions.py\n    ├── <span class=\"dir\">templates/</span>\n    └── requirements/\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Django's \"batteries included\" philosophy makes MTV the\r\n                  framework's architecture. Service layer extraction\r\n                  (services.py + selectors.py for read/write separation)\r\n                  prevents views from becoming orchestrators. DRF's serializer\r\n                  layer provides validation + browsable API docs. App-based\r\n                  structure enables modular monolith — each app is a bounded\r\n                  context extractable into a service.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Django",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Django when:</strong> Need maximum throughput per process — Go or Rust is faster even with async. App is purely API-only with no admin — FastAPI or Express is leaner. Need WebSocket-first real-time architecture — while Django Channels works, it adds complexity versus Go/Elixir. Complex frontend interactions with heavy JavaScript frameworks.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>API</td>\r\n                    <td>Django REST Framework</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>django-allauth</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Background</td>\r\n                    <td>Celery + Redis</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Filtering</td>\r\n                    <td>django-filter</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>pytest + factory_boy</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Deploy</td>\r\n                    <td>Gunicorn + Nginx / Uvicorn</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "laravel",
    "cat": "backend",
    "name": "Laravel",
    "icon": "LV",
    "archBadge": "MVC + Action Classes",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Standard Laravel MVC with Eloquent and Blade.</strong> Use Laravel's conventions: controllers, Eloquent models, Blade views. Form Requests for validation. Laravel Breeze for auth scaffolding. Service classes only for genuinely complex logic. Livewire for interactive UI. The framework's defaults are the small-project pattern.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">app/</span>\n├── <span class=\"dir\">Http/</span>\n│   ├── <span class=\"dir\">Controllers/</span>\n│   │   ├── AuthController.php\n│   │   └── DashboardController.php\n│   └── <span class=\"dir\">Requests/</span>         <span class=\"comment\"># Form validation</span>\n├── <span class=\"dir\">Models/</span>\n│   └── User.php\n├── <span class=\"dir\">Services/</span>             <span class=\"comment\"># Only complex ops</span>\n└── <span class=\"dir\">Providers/</span>\n<span class=\"dir\">resources/views/</span>\n├── <span class=\"dir\">layouts/</span>\n├── <span class=\"dir\">auth/</span>\n└── <span class=\"dir\">dashboard/</span>\n<span class=\"dir\">routes/</span>\n└── web.php\n<span class=\"dir\">database/migrations/</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  <strong\r\n                    >MVC with Action Classes and Repository Pattern\r\n                    (selective).</strong\r\n                  >\r\n                  Eloquent Models handle data + relationships, Controllers\r\n                  handle HTTP, Blade/Livewire handles views.\r\n                  <strong>Action Classes</strong> (single-purpose invokable\r\n                  classes) extract business logic from controllers. Service\r\n                  container provides auto-resolution DI.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → Router → Middleware → Controller → Form Request →\r\n                      Eloquent → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>\r\n                    Eloquent Active Record:\r\n                    <code>User::where(...)->with('orders')->get()</code>\r\n                  </li>\r\n                  <li>\r\n                    Service container auto-resolves constructor dependencies\r\n                  </li>\r\n                  <li>\r\n                    <strong>Livewire</strong>: server-rendered reactive\r\n                    components, zero JS API layer\r\n                  </li>\r\n                  <li>Events/Listeners for decoupled side effects</li>\r\n                  <li>Queued jobs for background processing</li>\r\n                </ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">app/</span>\n    ├── <span class=\"dir\">Actions/</span>            <span class=\"comment\"># Single-purpose business logic</span>\n    │   ├── <span class=\"dir\">Auth/</span>\n    │   │   ├── RegisterUserAction.php\n    │   │   └── LoginUserAction.php\n    │   ├── <span class=\"dir\">Order/</span>\n    │   │   ├── PlaceOrderAction.php\n    │   │   └── CancelOrderAction.php\n    │   └── <span class=\"dir\">Notification/</span>\n    ├── <span class=\"dir\">Http/</span>\n    │   ├── <span class=\"dir\">Controllers/</span>\n    │   │   ├── <span class=\"dir\">Auth/</span>\n    │   │   ├── UserController.php\n    │   │   └── OrderController.php\n    │   ├── <span class=\"dir\">Requests/</span>       <span class=\"comment\"># Form Request validation</span>\n    │   │   ├── RegisterRequest.php\n    │   │   └── OrderRequest.php\n    │   └── <span class=\"dir\">Resources/</span>      <span class=\"comment\"># API Resources (JSON transform)</span>\n    │   ├── UserResource.php\n    │   └── OrderResource.php\n    ├── <span class=\"dir\">Models/</span>\n    │   ├── User.php        <span class=\"comment\"># relationships, scopes, casts</span>\n    │   ├── Order.php\n    │   └── Product.php\n    ├── <span class=\"dir\">Services/</span>           <span class=\"comment\"># Cross-cutting services</span>\n    ├── <span class=\"dir\">Events/</span>\n    ├── <span class=\"dir\">Listeners/</span>\n    ├── <span class=\"dir\">Jobs/</span>\n    ├── <span class=\"dir\">Livewire/</span>           <span class=\"comment\"># Reactive server components</span>\n    ├── <span class=\"dir\">Policies/</span>\n    └── <span class=\"dir\">Providers/</span>\n    └── AppServiceProvider.php\n    <span class=\"dir\">routes/</span>\n    ├── web.php\n    ├── api.php\n    └── console.php\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <path\r\n                      d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\r\n                    /></svg\r\n                  >",
        "contentHtml": "<p>\r\n                  Laravel's service container can auto-resolve dependencies,\r\n                  bind interfaces to implementations, and create contextual\r\n                  bindings — making DI trivially easy. Action Classes are\r\n                  testable in isolation and can be queued. Eloquent's Active\r\n                  Record is appropriate for Laravel's target domain (web apps).\r\n                  Livewire eliminates the API layer for interactive UIs.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Laravel",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Laravel when:</strong> Need high concurrency and real-time — Laravel's synchronous nature limits WebSocket. App is API-only — MVC overhead unnecessary. Need maximum performance — Go/Fiber or Node.js is faster. Complex frontend interactions.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" />\r\n                    <line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" />\r\n                    <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg\r\n                  >",
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>Sanctum / Fortify</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>API</td>\r\n                    <td>API Resources + Sanctum</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Queue</td>\r\n                    <td>Laravel Queue (Redis)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Search</td>\r\n                    <td>Laravel Scout (Meilisearch)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Real-time</td>\r\n                    <td>Laravel Reverb / Pusher</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Admin</td>\r\n                    <td>Filament v3</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>PHPUnit + Dusk</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Debug</td>\r\n                    <td>Telescope + Ray</td>\r\n                  </tr>\r\n                </table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "dotnet-wpf",
    "cat": "desktop",
    "name": ".NET WPF",
    "icon": "WP",
    "archBadge": "Clean DDD + MVVM + Application Layer",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Single WPF project with feature folders + MVVM source generators.</strong> Drop multi-project Clean Architecture. Keep a single WPF project with feature folders (<code>Features/Orders/</code>, <code>Services/</code>). Use CommunityToolkit.Mvvm source generators (<code>[ObservableProperty]</code>, <code>[RelayCommand]</code>) for zero-boilerplate ViewModels. No DDD, just straightforward services and ViewModels.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">MyApp/</span>\n├── App.xaml               <span class=\"comment\"># Startup config</span>\n├── App.xaml.cs            <span class=\"comment\"># DI registration</span>\n├── <span class=\"dir\">Features/</span>\n│   ├── <span class=\"dir\">Auth/</span>\n│   │   ├── LoginViewModel.cs   <span class=\"comment\"># [ObservableProperty]</span>\n│   │   ├── LoginView.xaml\n│   │   └── AuthService.cs\n│   ├── <span class=\"dir\">Orders/</span>\n│   └── <span class=\"dir\">Settings/</span>\n├── <span class=\"dir\">Services/</span>             <span class=\"comment\"># API clients, DB</span>\n├── <span class=\"dir\">Controls/</span>             <span class=\"comment\"># Custom controls</span>\n└── <span class=\"dir\">Converters/</span>           <span class=\"comment\"># IValueConverter</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Clean DDD + MVVM with Application Layer and Source Generators.</strong> Multi-project solution with compile-time enforced boundaries. Domain is a pure .NET class library with zero WPF dependencies. Application layer orchestrates use cases via command/query handlers. Presentation layer (ViewModels) calls only Application services — never Domain or Infrastructure directly. CommunityToolkit.Mvvm source generators (<code>[ObservableProperty]</code>, <code>[RelayCommand]</code>) eliminate INotifyPropertyChanged and ICommand boilerplate. <code>WeakReferenceMessenger</code> handles cross-module event broadcasting; <code>INavigationService</code> keeps ViewModels testable.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Source-generated <code>[ObservableProperty]</code> and <code>[RelayCommand]</code></strong> eliminate INotifyPropertyChanged and ICommand boilerplate — WPF bindings still use the standard binding engine.</li><li><strong>WeakReferenceMessenger</strong> for global event broadcasting and loosely coupled modules; direct references or shared services for parent-child ViewModels.</li><li><strong>INavigationService</strong> abstraction keeps ViewModels decoupled from Window/Page creation.</li><li><strong>Result&lt;T&gt; pattern</strong> makes errors explicit — no exception-driven flow.</li><li><strong>AsyncRelayCommand</strong> everywhere for async operations with <code>IsBusy</code> / <code>ErrorMessage</code> states.</li><li><strong>ILogger&lt;T&gt;</strong> + Microsoft.Extensions.Logging injected everywhere; <code>IConfiguration</code> for settings.</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">MySolution/</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── <span class=\"dir\">MyApp.Domain/</span>               <span class=\"comment\"># Class Library — zero dependencies</span>\n    │   │   ├── <span class=\"dir\">SharedKernel/</span>\n    │   │   │   ├── Entity.cs\n    │   │   │   ├── ValueObject.cs\n    │   │   │   └── Result.cs              <span class=\"comment\"># Result&lt;T&gt; pattern</span>\n    │   │   ├── <span class=\"dir\">Orders/</span>\n    │   │   │   ├── Order.cs              <span class=\"comment\"># Aggregate root</span>\n    │   │   │   ├── OrderItem.cs          <span class=\"comment\"># Entity</span>\n    │   │   │   ├── OrderStatus.cs        <span class=\"comment\"># Value object</span>\n    │   │   │   ├── <span class=\"dir\">Events/</span>\n    │   │   │   │   └── OrderCreatedEvent.cs\n    │   │   │   └── IOrderRepository.cs   <span class=\"comment\"># Interface only</span>\n    │   │   └── <span class=\"dir\">Customers/</span>\n    │   │       ├── Customer.cs\n    │   │       └── ICustomerRepository.cs\n    │   │\n    │   ├── <span class=\"dir\">MyApp.Application/</span>          <span class=\"comment\"># Depends on Domain only</span>\n    │   │   ├── <span class=\"dir\">Common/</span>\n    │   │   │   ├── <span class=\"dir\">Interfaces/</span>\n    │   │   │   │   ├── IUnitOfWork.cs\n    │   │   │   │   ├── INavigationService.cs\n    │   │   │   │   └── IDialogService.cs\n    │   │   │   └── <span class=\"dir\">Behaviours/</span>\n    │   │   │       └── ValidationBehavior.cs\n    │   │   ├── <span class=\"dir\">Orders/</span>\n    │   │   │   ├── <span class=\"dir\">GetOrders/</span>\n    │   │   │   │   ├── GetOrdersQuery.cs\n    │   │   │   │   └── GetOrdersHandler.cs\n    │   │   │   └── <span class=\"dir\">CreateOrder/</span>\n    │   │   │       ├── CreateOrderCommand.cs\n    │   │   │       ├── CreateOrderHandler.cs\n    │   │   │       └── CreateOrderValidator.cs\n    │   │   ├── <span class=\"dir\">DTOs/</span>\n    │   │   │   └── OrderDto.cs           <span class=\"comment\"># Never expose entities to VM</span>\n    │   │   └── DependencyInjection.cs\n    │   │\n    │   ├── <span class=\"dir\">MyApp.Infrastructure/</span>       <span class=\"comment\"># Implements Domain interfaces</span>\n    │   │   ├── <span class=\"dir\">Persistence/</span>\n    │   │   │   ├── AppDbContext.cs\n    │   │   │   ├── <span class=\"dir\">Configurations/</span>\n    │   │   │   └── <span class=\"dir\">Repositories/</span>\n    │   │   │       ├── OrderRepository.cs\n    │   │   │       └── CustomerRepository.cs\n    │   │   ├── <span class=\"dir\">ExternalServices/</span>\n    │   │   └── DependencyInjection.cs\n    │   │\n    │   └── <span class=\"dir\">MyApp.Presentation.Wpf/</span>     <span class=\"comment\"># WPF App — depends on App + Infra</span>\n    │       ├── App.xaml                 <span class=\"comment\"># Startup configuration</span>\n    │       ├── App.xaml.cs              <span class=\"comment\"># DI Composition Root</span>\n    │       ├── <span class=\"dir\">Views/</span>\n    │       │   ├── <span class=\"dir\">Orders/</span>\n    │       │   │   └── OrdersView.xaml\n    │       │   └── <span class=\"dir\">Shell/</span>\n    │       │       └── MainWindow.xaml\n    │       ├── <span class=\"dir\">ViewModels/</span>\n    │       │   ├── <span class=\"dir\">Orders/</span>\n    │       │   │   └── OrdersViewModel.cs  <span class=\"comment\"># [ObservableProperty]</span>\n    │       │   └── <span class=\"dir\">Shell/</span>\n    │       │       └── MainWindowViewModel.cs\n    │       ├── <span class=\"dir\">Services/</span>\n    │       │   ├── NavigationService.cs\n    │       │   └── DialogService.cs\n    │       ├── <span class=\"dir\">Converters/</span>\n    │       └── <span class=\"dir\">Behaviors/</span>\n    │\n    └── <span class=\"dir\">tests/</span>\n        ├── <span class=\"dir\">MyApp.Domain.Tests/</span>\n        ├── <span class=\"dir\">MyApp.Application.Tests/</span>\n        └── <span class=\"dir\">MyApp.Presentation.Tests/</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>.NET's project system enforces layer separation at compile time — Domain physically cannot reference Infrastructure or Presentation. CommunityToolkit.Mvvm source generators produce zero-overhead <code>INotifyPropertyChanged</code> and <code>IRelayCommand</code> implementations. <code>WeakReferenceMessenger</code> prevents the classic WPF leak where ViewModels subscribe to events and never get collected. The Application layer keeps ViewModels thin and testable, while <code>INavigationService</code> decouples navigation from window creation. This structure scales from small tools to enterprise LOB applications.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use WPF",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use WPF when:</strong> Need cross-platform support — WPF is Windows-only. App is simple — WinForms is faster to build. Need modern UI with web responsiveness — Electron or Blazor Hybrid is better. Team is new to .NET — WinForms has lower barrier.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>MVVM Toolkit</td><td>CommunityToolkit.Mvvm</td></tr><tr><td>DI</td><td>Microsoft.Extensions.DependencyInjection</td></tr><tr><td>ORM</td><td>EF Core / Dapper</td></tr><tr><td>Validation</td><td>FluentValidation</td></tr><tr><td>Navigation</td><td>Custom INavigationService</td></tr><tr><td>Messaging</td><td>WeakReferenceMessenger</td></tr><tr><td>Logging</td><td>Serilog + ILogger&lt;T&gt;</td></tr><tr><td>Config</td><td>Microsoft.Extensions.Configuration</td></tr><tr><td>Testing</td><td>xUnit + Moq + FluentAssertions</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "dotnet-maui",
    "cat": "mobile",
    "name": ".NET MAUI",
    "icon": "MU",
    "archBadge": "Blazor Hybrid / Clean MVVM",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Single MAUI project with Razor components + simple services.</strong> Use BlazorWebView with Razor pages for UI. Services registered via <code>MauiProgram.cs</code> DI. Shared Razor components for cross-platform UI. No separate platform projects — MAUI handles targets. Simple, direct, one-project structure.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">MyApp/</span>\n├── MauiProgram.cs         <span class=\"comment\"># Builder + DI</span>\n├── App.xaml\n├── <span class=\"dir\">Components/</span>\n│   ├── <span class=\"dir\">Pages/</span>\n│   │   ├── Login.razor\n│   │   └── Dashboard.razor\n│   └── <span class=\"dir\">Shared/</span>            <span class=\"comment\"># Reusable components</span>\n├── <span class=\"dir\">Services/</span>\n│   ├── AuthService.cs\n│   └── ApiService.cs\n├── <span class=\"dir\">Models/</span>\n└── <span class=\"dir\">Platforms/</span>            <span class=\"comment\"># Platform specifics</span>\n├── Android/\n├── iOS/\n└── Windows/\n</div>",
        "fullWidth": true,
        "tier": "small"
      },

      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Blazor Hybrid Architecture.</strong> Renders modern web interfaces directly in-process. Shares 100% of HTML/CSS layouts with web applications, accessing native device systems via C# Interop with zero webview network lag.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Blazor components</strong> render via BlazorWebView.</li><li><strong>C# Interop Layer</strong> accesses native device sensors and storage.</li><li><strong>Shared Razor components</strong> are reused across mobile, desktop, and web targets.</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n  <span class=\"dir\">src/</span>\n  ├── MauiProgram.cs    <span class=\"comment\"># Application bootstrapper</span>\n  ├── App.xaml          <span class=\"comment\"># Native platform configurations</span>\n  ├── <span class=\"dir\">Platforms/</span>        <span class=\"comment\"># Platform-specific configurations</span>\n  │   ├── <span class=\"dir\">Android/</span>\n  │   ├── <span class=\"dir\">iOS/</span>\n  │   └── <span class=\"dir\">Windows/</span>\n  ├── <span class=\"dir\">Razor/</span>            <span class=\"comment\"># Shared Razor UI components</span>\n  └── <span class=\"dir\">Services/</span>         <span class=\"comment\"># Shared business services</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>Blazor Hybrid renders modern web interfaces directly in-process, sharing 100% of HTML/CSS layouts with web applications while accessing native device systems via C# Interop with zero webview network lag. The single-project structure with Razor components eliminates the complexity of multi-platform setup while maintaining native performance.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use MAUI",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use MAUI when:</strong> Need to support very old devices — MAUI requires newer OS. Need heavy platform-specific features — native is more reliable. Team is new to .NET — Flutter has more resources. Need maximum performance with complex animations.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>UI Framework</td><td>Blazor / Razor Components</td></tr><tr><td>DI</td><td>MauiProgram.cs</td></tr><tr><td>State</td><td>Blazor State</td></tr><tr><td>Navigation</td><td>Blazor Router</td></tr><tr><td>Testing</td><td>xUnit + BUnit</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "electron",
    "cat": "desktop",
    "name": "Electron",
    "icon": "EL",
    "archBadge": "Type-Safe IPC + electron-vite + Zod",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>electron-vite + preload bridge + React UI.</strong> Use <code>electron-vite</code> for zero-config build tooling (separate Main/Preload/Renderer targets). Expose a typed <code>window.api</code> via <code>contextBridge</code>. Main process handles file system and native APIs. Renderer is a standard React app. IPC via <code>ipcMain.handle</code> / <code>ipcRenderer.invoke</code> — no abstraction layer.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── <span class=\"dir\">main/</span>\n│   └── index.ts           <span class=\"comment\"># BrowserWindow + ipcMain</span>\n├── <span class=\"dir\">preload/</span>\n│   └── index.ts           <span class=\"comment\"># contextBridge.exposeInMainWorld</span>\n├── <span class=\"dir\">renderer/</span>\n│   ├── index.html\n│   └── <span class=\"dir\">src/</span>\n│       ├── App.tsx\n│       ├── <span class=\"dir\">pages/</span>\n│       └── <span class=\"dir\">components/</span>\n└── electron.vite.config.ts <span class=\"comment\"># Build config for all 3 targets</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Type-Safe Multi-Process Architecture with Runtime Validation.</strong> Uses <code>electron-vite</code> for build tooling across all 3 process targets (Main, Preload, Renderer). Type-safe RPC (tRPC-style) over a context-isolated preload bridge. Zod runtime validation on every IPC input — TypeScript protects compile time, Zod protects runtime. Shared contract layer (<code>shared/</code>) is the single source of truth. Typed event subscriptions for main-to-renderer pushes (download progress, file watchers). Structured error propagation with <code>RpcResult&lt;T&gt;</code>.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>electron-vite</strong> rebuilds Main and Preload on changes while Renderer HMR stays instant — no full-app restart.</li><li><strong>Type-safe RPC</strong> validates IPC at compile time; <strong>Zod schemas</strong> validate at runtime — belt-and-suspenders.</li><li><strong>Typed event subscriptions</strong> for main-to-renderer pushes (progress, notifications, filesystem watchers).</li><li><strong>Context isolation + CSP headers</strong> — preload exposes a whitelist, never raw <code>ipcRenderer</code>.</li><li><strong>RpcResult&lt;T&gt; error pattern</strong> — structured errors with code/message travel across the bridge; no silent hangs.</li><li><strong>Modular sub-routers</strong> split by domain (filesystem, updater, system) — scales past 20+ features.</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── <span class=\"dir\">main/</span>                <span class=\"comment\"># Main process — Node.js / OS logic</span>\n    │   ├── index.ts             <span class=\"comment\"># App lifecycle, window creation</span>\n    │   ├── <span class=\"dir\">ipc/</span>\n    │   │   ├── router.ts        <span class=\"comment\"># Root router combining sub-routers</span>\n    │   │   └── <span class=\"dir\">procedures/</span>\n    │   │       ├── filesystem.ts\n    │   │       ├── system.ts\n    │   │       └── updater.ts\n    │   ├── <span class=\"dir\">services/</span>\n    │   │   ├── WindowManager.ts <span class=\"comment\"># Multi-window lifecycle</span>\n    │   │   ├── AutoUpdater.ts\n    │   │   └── StorageService.ts\n    │   ├── <span class=\"dir\">events/</span>\n    │   │   └── StateSync.ts     <span class=\"comment\"># Main→Renderer push events</span>\n    │   └── <span class=\"dir\">utils/</span>\n    │       └── logger.ts        <span class=\"comment\"># Structured logging</span>\n    ├── <span class=\"dir\">preload/</span>               <span class=\"comment\"># Sandboxed context bridge</span>\n    │   └── index.ts             <span class=\"comment\"># Whitelisted typed API only</span>\n    ├── <span class=\"dir\">renderer/</span>              <span class=\"comment\"># Vite + React UI</span>\n    │   ├── index.html\n    │   └── <span class=\"dir\">src/</span>\n    │       ├── <span class=\"dir\">features/</span>      <span class=\"comment\"># Feature-based organization</span>\n    │       ├── <span class=\"dir\">hooks/</span>\n    │       │   └── useIPC.ts    <span class=\"comment\"># Typed hook wrapping bridge</span>\n    │       ├── <span class=\"dir\">stores/</span>         <span class=\"comment\"># Zustand / Jotai</span>\n    │       └── trpc.ts          <span class=\"comment\"># tRPC client config</span>\n    ├── <span class=\"dir\">shared/</span>               <span class=\"comment\"># ← Single source of truth</span>\n    │   ├── <span class=\"dir\">types/</span>\n    │   │   ├── ipc.ts           <span class=\"comment\"># Shared contract types</span>\n    │   │   └── domain.ts\n    │   ├── <span class=\"dir\">schemas/</span>            <span class=\"comment\"># Zod validation schemas</span>\n    │   ├── <span class=\"dir\">errors/</span>             <span class=\"comment\"># RpcResult, AppError</span>\n    │   └── constants.ts\n    └── electron.vite.config.ts  <span class=\"comment\"># Build config for all 3 targets</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why It's The Best Match",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p><code>electron-vite</code> eliminates the Webpack configuration nightmare — separate build targets for Main (Node), Preload (sandbox), and Renderer (web) with HMR across all of them. The type-safe RPC bridge is the single most valuable architectural decision: compile-time validation of IPC contracts eliminates an entire class of production bugs. Zod runtime validation protects against corrupted data from serialization or third-party APIs. The shared contract layer ensures main and renderer never drift apart. This is the architecture pattern that scales from small tools to large multi-window, auto-updating desktop applications.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Electron",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Electron when:</strong> Need minimal memory footprint — Electron bundles Chromium. App is simple with minimal UI — native is lighter. Need maximum performance for CPU-intensive tasks. App must run on low-end hardware — Electron's memory requirements are prohibitive.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Build Tooling</td><td>electron-vite</td></tr><tr><td>UI Framework</td><td>React / Vue + Vite</td></tr><tr><td>IPC</td><td>Custom tRPC-style bridge</td></tr><tr><td>Validation</td><td>Zod / Valibot</td></tr><tr><td>State</td><td>Zustand / Jotai</td></tr><tr><td>Packaging</td><td>electron-builder</td></tr><tr><td>Auto-Update</td><td>electron-updater</td></tr><tr><td>Logging</td><td>electron-log</td></tr><tr><td>Testing</td><td>Vitest + Playwright + Electron</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "fastapi",
    "cat": "backend",
    "name": "FastAPI",
    "icon": "FA",
    "archBadge": "Dependency Injection + Service Layer",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Router files + service modules in a single FastAPI app.</strong> Use FastAPI's dependency injection via <code>Depends()</code> to inject services and DB sessions. Pydantic models for request/response schemas. SQLAlchemy or SQLModel for ORM. Each router file owns its endpoints and depends on service modules. No domain layer — services hold business logic directly.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">app/</span>\n├── main.py                 <span class=\"comment\"># FastAPI() app + lifespan</span>\n├── <span class=\"dir\">routers/</span>\n│   ├── auth.py              <span class=\"comment\"># APIRouter(prefix=\"/auth\")</span>\n│   └── users.py\n├── <span class=\"dir\">services/</span>\n│   ├── auth_service.py\n│   └── user_service.py\n├── <span class=\"dir\">models/</span>               <span class=\"comment\"># SQLAlchemy/SQLModel models</span>\n│   └── user.py\n├── <span class=\"dir\">schemas/</span>              <span class=\"comment\"># Pydantic request/response</span>\n│   └── user.py\n├── <span class=\"dir\">dependencies/</span>         <span class=\"comment\"># get_db, get_current_user</span>\n│   └── database.py\n└── <span class=\"dir\">core/</span>                 <span class=\"comment\"># config, security helpers</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Dependency Injection + Service Layer with Repository Pattern.</strong> FastAPI's built-in <code>Depends()</code> system wires the dependency graph — no external DI container needed. Pydantic v2 provides compile-time schema validation. The service layer contains pure business logic; repositories abstract persistence (SQLAlchemy). Alembic handles migrations. Background tasks via <code>BackgroundTasks</code> or Celery for heavier async work. Asynchronous endpoints via <code>async def</code> with async DB drivers.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>HTTP → Router → Depends(service) → Service → Repository → DB</strong></li><li><strong>FastAPI's Depends()</strong> resolves dependencies hierarchically — database sessions, current user, permissions</li><li><strong>Pydantic v2</strong> validates request bodies, query params, and path params at the boundary with Rust-level speed</li><li><strong>async/await</strong> — endpoint functions can be <code>async def</code> with async DB drivers (asyncpg, SQLAlchemy async)</li><li><strong>Dependency override</strong> — <code>app.dependency_overrides</code> swaps implementations for testing without mocking libraries</li><li><strong>BackgroundTasks</strong> for lightweight post-response work; <strong>Celery / ARQ</strong> for heavy distributed tasks</li><li><strong>Middleware</strong> — CORS, rate limiting, logging — applied globally at the Starlette level</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">app/</span>\n    ├── main.py                         <span class=\"comment\"># FastAPI() app, lifespan, middleware</span>\n    ├── <span class=\"dir\">api/</span>\n    │   ├── __init__.py\n    │   ├── <span class=\"dir\">v1/</span>\n    │   │   ├── __init__.py\n    │   │   ├── router.py               <span class=\"comment\"># Aggregates all v1 routers</span>\n    │   │   ├── <span class=\"dir\">endpoints/</span>\n    │   │   │   ├── auth.py             <span class=\"comment\"># POST /login, /register</span>\n    │   │   │   ├── users.py\n    │   │   │   └── orders.py\n    │   │   └── <span class=\"dir\">deps/</span>\n    │   │       ├── auth.py             <span class=\"comment\"># get_current_user dependency</span>\n    │   │       └── database.py         <span class=\"comment\"># get_db session dependency</span>\n    │   └── <span class=\"dir\">v2/</span>                          <span class=\"comment\"># Future API version</span>\n    ├── <span class=\"dir\">services/</span>                      <span class=\"comment\"># Business logic — no HTTP deps</span>\n    │   ├── auth_service.py\n    │   ├── user_service.py\n    │   └── order_service.py\n    ├── <span class=\"dir\">repositories/</span>                  <span class=\"comment\"># Data access abstraction</span>\n    │   ├── base.py                     <span class=\"comment\"># BaseRepository with CRUD</span>\n    │   ├── user_repository.py\n    │   └── order_repository.py\n    ├── <span class=\"dir\">models/</span>                       <span class=\"comment\"># SQLAlchemy ORM models</span>\n    │   ├── base.py                     <span class=\"comment\"># DeclarativeBase + common mixins</span>\n    │   ├── user.py\n    │   └── order.py\n    ├── <span class=\"dir\">schemas/</span>                      <span class=\"comment\"># Pydantic v2 models</span>\n    │   ├── user.py                     <span class=\"comment\"># UserCreate, UserRead, UserUpdate</span>\n    │   ├── order.py\n    │   └── common.py                   <span class=\"comment\"># PaginatedResponse, Message</span>\n    ├── <span class=\"dir\">core/</span>\n    │   ├── config.py                   <span class=\"comment\"># Pydantic Settings (env parsing)</span>\n    │   ├── security.py                 <span class=\"comment\"># JWT, password hashing</span>\n    │   ├── database.py                 <span class=\"comment\"># async engine + session factory</span>\n    │   └── exceptions.py              <span class=\"comment\"># Custom HTTP exceptions</span>\n    ├── <span class=\"dir\">middleware/</span>\n    │   ├── cors.py\n    │   ├── rate_limit.py\n    │   └── logging.py\n    ├── <span class=\"dir\">tasks/</span>                         <span class=\"comment\"># Celery / ARQ background jobs</span>\n    │   ├── celery_app.py\n    │   └── email_tasks.py\n    └── <span class=\"dir\">tests/</span>\n        ├── conftest.py                 <span class=\"comment\"># Fixtures + dependency overrides</span>\n        ├── <span class=\"dir\">api/</span>\n        ├── <span class=\"dir\">services/</span>\n        └── <span class=\"dir\">repositories/</span>\n    <span class=\"dir\">alembic/</span>                           <span class=\"comment\"># Database migrations</span>\n    └── <span class=\"dir\">versions/</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use FastAPI",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use FastAPI when:</strong> Building a full-stack app with server-rendered pages — Django has built-in templating, admin, and ORM. Need mature ecosystem of third-party packages (payments, CMS) — Django's ecosystem is larger. Team is more comfortable with Django's &amp;quot;batteries included&amp;quot; approach. Need strict synchronous code — FastAPI's async/await patterns require careful handling.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>ORM</td><td>SQLAlchemy 2.0+ (async) / SQLModel</td></tr><tr><td>Validation</td><td>Pydantic v2 (built-in)</td></tr><tr><td>Migration</td><td>Alembic</td></tr><tr><td>Auth</td><td>python-jose + passlib / FastAPI Users</td></tr><tr><td>API Docs</td><td>Swagger UI + ReDoc (auto-generated)</td></tr><tr><td>Background Tasks</td><td>Celery + Redis / ARQ</td></tr><tr><td>Caching</td><td>Redis + fastapi-cache</td></tr><tr><td>Testing</td><td>pytest + httpx + pytest-asyncio</td></tr><tr><td>Logging</td><td>structlog / loguru</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "hono",
    "cat": "backend",
    "name": "Hono",
    "icon": "HO",
    "archBadge": "Edge-First Middleware Chain + RPC",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Single Hono app with route groups in one file.</strong> Use Hono's clean API: <code>app.get('/users/:id', c => ...)</code>. Route groups via <code>app.route('/auth', authRoutes)</code>. Zod validation with <code>@hono/zod-validator</code>. Drizzle or Prisma directly in handlers. No middleware chain complexity — just routes and DB calls.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── index.ts               <span class=\"comment\"># Hono app + middleware</span>\n├── <span class=\"dir\">routes/</span>\n│   ├── auth.ts             <span class=\"comment\"># Hono router</span>\n│   ├── users.ts\n│   └── index.ts            <span class=\"comment\"># Route aggregator</span>\n├── <span class=\"dir\">middleware/</span>\n│   └── auth.ts             <span class=\"comment\"># JWT middleware</span>\n├── <span class=\"dir\">db/</span>\n│   └── schema.ts           <span class=\"comment\"># Drizzle schema</span>\n└── <span class=\"dir\">validators/</span>           <span class=\"comment\"># Zod schemas</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Edge-First Middleware Chain with Type-Safe RPC.</strong> Hono runs on every JS runtime (Cloudflare Workers, Bun, Deno, Node, AWS Lambda) with minimal overhead. The architecture leverages middleware chains (auth, validation, caching) composed per-route. Hono RPC enables end-to-end type safety — the server exports route types and the client consumes them. Service layer stays runtime-agnostic; adapters handle platform-specific concerns (KV, R2, D1).</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>HTTP → Middleware chain → Zod validation → Handler → Service → DB/KV</strong></li><li><strong>Hono RPC</strong> — server exports <code>AppType</code>; client imports <code>hc&lt;AppType&gt;()</code> for full type inference across the wire</li><li><strong>Edge-native</strong> — runs at the edge (Cloudflare Workers) with cold starts in single-digit ms</li><li><strong>Middleware composition</strong> — <code>app.use('*', cors()); app.use('/api/*', auth());</code> stacks declaratively</li><li><strong>Platform adapters</strong> — same Hono code runs on Workers (KV, D1), Bun (Bun.sql), Node (pg) via bindings</li><li><strong>JWT/API key auth</strong> at middleware level; fine-grained permission checks in services</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── index.ts                        <span class=\"comment\"># Hono app creation + global middleware</span>\n    ├── <span class=\"dir\">routes/</span>\n    │   ├── index.ts                    <span class=\"comment\"># Aggregates all sub-routers</span>\n    │   ├── auth.routes.ts\n    │   ├── users.routes.ts\n    │   └── webhooks.routes.ts\n    ├── <span class=\"dir\">handlers/</span>                     <span class=\"comment\"># Thin: validate → service → response</span>\n    │   ├── auth.handler.ts\n    │   └── users.handler.ts\n    ├── <span class=\"dir\">services/</span>                     <span class=\"comment\"># Business logic — zero Hono imports</span>\n    │   ├── auth.service.ts\n    │   └── user.service.ts\n    ├── <span class=\"dir\">repositories/</span>                 <span class=\"comment\"># Data access (Drizzle)</span>\n    │   └── user.repository.ts\n    ├── <span class=\"dir\">middleware/</span>\n    │   ├── auth.middleware.ts           <span class=\"comment\"># JWT verification</span>\n    │   ├── rate-limit.middleware.ts\n    │   └── error.middleware.ts          <span class=\"comment\"># Global error handler</span>\n    ├── <span class=\"dir\">validators/</span>\n    │   └── auth.validator.ts            <span class=\"comment\"># Zod schemas for routes</span>\n    ├── <span class=\"dir\">db/</span>\n    │   ├── index.ts                     <span class=\"comment\"># Drizzle client singleton</span>\n    │   ├── schema.ts                    <span class=\"comment\"># Table definitions</span>\n    │   └── <span class=\"dir\">migrations/</span>\n    ├── <span class=\"dir\">lib/</span>\n    │   ├── rpc-types.ts                <span class=\"comment\"># Exported AppType for client</span>\n    │   └── env.ts                       <span class=\"comment\"># Env bindings type</span>\n    ├── <span class=\"dir\">adapters/</span>                     <span class=\"comment\"># Platform-specific implementations</span>\n    │   ├── storage.ts                   <span class=\"comment\"># Interface</span>\n    │   ├── storage.r2.ts               <span class=\"comment\"># Cloudflare R2 impl</span>\n    │   └── storage.s3.ts               <span class=\"comment\"># S3 impl</span>\n    └── <span class=\"dir\">shared/</span>                       <span class=\"comment\"># Types shared with client</span>\n        └── api-types.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Hono",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Hono when:</strong> Need mature ORM with migrations built in — NestJS/Django have richer ecosystems. Building a monolithic backend with complex relational queries — Hono's lightweight nature means you assemble more pieces yourself. Need built-in auth with social login — NestJS has more mature packages. Team needs strong architectural opinions — Hono is intentionally minimal and flexible.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Validation</td><td>@hono/zod-validator</td></tr><tr><td>RPC Types</td><td>hc (Hono Client — built-in)</td></tr><tr><td>ORM</td><td>Drizzle ORM</td></tr><tr><td>Auth</td><td>@hono/jwt + jose</td></tr><tr><td>Caching</td><td>Cloudflare KV / Redis</td></tr><tr><td>File Upload</td><td>R2 / S3 via presigned URLs</td></tr><tr><td>Testing</td><td>Vitest + hono/testing</td></tr><tr><td>Deploy</td><td>Cloudflare Workers / Fly.io / Railway</td></tr><tr><td>OpenAPI</td><td>@hono/zod-openapi</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "astro",
    "cat": "frontend",
    "name": "Astro",
    "icon": "AS",
    "archBadge": "Islands Architecture + Content Collections",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>.astro pages + components with zero JS by default.</strong> Use Astro's file-based routing, <code>.astro</code> components for server-rendered HTML, and <code>client:*</code> directives sparingly for interactive islands. Content collections for blog/docs. No client-side framework required — Astro ships zero JS unless you explicitly opt in.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── <span class=\"dir\">pages/</span>\n│   ├── index.astro         <span class=\"comment\"># Home page</span>\n│   ├── about.astro\n│   └── <span class=\"dir\">blog/</span>\n│       └── [slug].astro\n├── <span class=\"dir\">components/</span>\n│   ├── Header.astro\n│   ├── Footer.astro\n│   └── Search.tsx          <span class=\"comment\"># Interactive island</span>\n├── <span class=\"dir\">layouts/</span>\n│   └── BaseLayout.astro\n└── <span class=\"dir\">content/</span>\n└── <span class=\"dir\">blog/</span>                <span class=\"comment\"># Markdown/MDX files</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Islands Architecture with Content Collections and Server Endpoints.</strong> Astro renders every page to static HTML at build time (SSG) by default, shipping zero JavaScript. Interactive components (React, Vue, Svelte) are <strong>islands</strong> — hydrating only where needed via <code>client:load</code>, <code>client:idle</code>, <code>client:visible</code> directives. Content Collections provide type-safe Markdown/MDX authoring. API endpoints via <code>.ts</code> files in <code>pages/</code>. View Transitions API for SPA-like navigation without JS libraries.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Build-time data flow</strong> — data fetched at build via <code>getCollection()</code> and <code>fetch()</code> in component frontmatter</li><li><strong>Server-side rendering (SSR)</strong> — opt-in per-page via <code>export const prerender = false</code>; data fetched per-request on the server</li><li><strong>Island hydration</strong> — interactive components load JS only when the island enters the viewport (<code>client:visible</code>)</li><li><strong>Content Collections</strong> — typed frontmatter via Zod schemas; Markdown/MDX compiled at build</li><li><strong>View Transitions</strong> — native browser API for animated page transitions; zero JS libraries</li><li><strong>Server endpoints</strong> — <code>GET</code>/<code>POST</code> handlers in <code>.ts</code> files; form actions for contact forms, newsletter signups</li><li><strong>State sharing</strong> — Nano Stores or framework-specific state within islands; no global client state by default</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── <span class=\"dir\">pages/</span>                         <span class=\"comment\"># File-based routing</span>\n    │   ├── index.astro                <span class=\"comment\"># Home (SSG)</span>\n    │   ├── about.astro\n    │   ├── <span class=\"dir\">blog/</span>\n    │   │   ├── index.astro            <span class=\"comment\"># Blog listing</span>\n    │   │   └── [...slug].astro        <span class=\"comment\"># Dynamic blog post</span>\n    │   ├── <span class=\"dir\">api/</span>\n    │   │   ├── search.ts              <span class=\"comment\"># GET /api/search</span>\n    │   │   └── newsletter.ts          <span class=\"comment\"># POST /api/newsletter</span>\n    │   └── rss.xml.ts                 <span class=\"comment\"># RSS feed endpoint</span>\n    ├── <span class=\"dir\">components/</span>\n    │   ├── <span class=\"dir\">ui/</span>                         <span class=\"comment\"># Base components (.astro)</span>\n    │   │   ├── Button.astro\n    │   │   ├── Card.astro\n    │   │   └── Nav.astro\n    │   ├── <span class=\"dir\">islands/</span>\n    │   │   ├── Search.tsx             <span class=\"comment\"># React island</span>\n    │   │   ├── ThemeToggle.svelte     <span class=\"comment\"># Svelte island</span>\n    │   │   └── NewsletterForm.vue     <span class=\"comment\"># Vue island</span>\n    │   └── Header.astro\n    ├── <span class=\"dir\">layouts/</span>\n    │   ├── BaseLayout.astro           <span class=\"comment\"># Shell: head, nav, footer</span>\n    │   ├── BlogLayout.astro\n    │   └── MarkdownLayout.astro       <span class=\"comment\"># For MDX pages</span>\n    ├── <span class=\"dir\">content/</span>\n    │   ├── config.ts                  <span class=\"comment\"># Collection schemas (Zod)</span>\n    │   ├── <span class=\"dir\">blog/</span>\n    │   │   ├── post-1.md\n    │   │   └── post-2.mdx\n    │   └── <span class=\"dir\">docs/</span>\n    ├── <span class=\"dir\">lib/</span>\n    │   ├── utils.ts                   <span class=\"comment\"># Helper functions</span>\n    │   └── constants.ts\n    ├── <span class=\"dir\">styles/</span>\n    │   └── global.css                 <span class=\"comment\"># Tailwind or vanilla CSS</span>\n    └── <span class=\"dir\">assets/</span>\n        └── <span class=\"dir\">images/</span>\n    <span class=\"dir\">public/</span>                            <span class=\"comment\"># Static files (no build)</span>\n        └── favicon.ico\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Astro",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Astro when:</strong> Building a highly interactive SPA — Astro's zero-JS philosophy fights you. App requires complex client-side state management — React/Next.js is better suited. Need real-time features (chat, live updates) — Astro's server model is primarily request-response. Building a dashboard with heavy CRUD — admin frameworks like React Admin are more productive.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>UI Framework (Islands)</td><td>React / Vue / Svelte / Solid (opt-in)</td></tr><tr><td>Content</td><td>Content Collections (built-in)</td></tr><tr><td>Styling</td><td>Tailwind CSS + @astrojs/tailwind</td></tr><tr><td>MDX</td><td>@astrojs/mdx</td></tr><tr><td>SSR Adapter</td><td>@astrojs/node / @astrojs/cloudflare</td></tr><tr><td>Icons</td><td>astro-icon</td></tr><tr><td>SEO</td><td>@astrojs/sitemap + astro-robots-txt</td></tr><tr><td>Image</td><td>@astrojs/image</td></tr><tr><td>Testing</td><td>Vitest + @playwright/test</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "tauri",
    "cat": "desktop",
    "name": "Tauri",
    "icon": "TA",
    "archBadge": "Tauri Commands + Frontend + Rust Backend",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Tauri commands + Vite React UI in a single Tauri project.</strong> Use <code>#[tauri::command]</code> in Rust for native operations (file system, system tray). Frontend is a standard Vite + React app. <code>invoke('command_name', { args })</code> from the frontend calls Rust commands. No elaborate IPC abstraction — direct command invocation with JSON serialization.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src-tauri/</span>\n├── Cargo.toml\n├── tauri.conf.json        <span class=\"comment\"># App config + permissions</span>\n├── <span class=\"dir\">src/</span>\n│   ├── main.rs            <span class=\"comment\"># App entry + command registration</span>\n│   └── lib.rs             <span class=\"comment\"># #[tauri::command] functions</span>\n<span class=\"dir\">src/</span> (frontend)\n├── main.tsx\n├── App.tsx\n├── <span class=\"dir\">pages/</span>\n├── <span class=\"dir\">components/</span>\n└── <span class=\"dir\">hooks/</span>                 <span class=\"comment\"># useTauriCommand.ts</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Tauri Commands with Rust Backend and Type-Safe IPC.</strong> Tauri replaces Electron's Chromium with the OS native WebView — resulting in dramatically smaller binaries (5MB vs 120MB+). The Rust backend handles all native operations via <code>#[tauri::command]</code> functions. The frontend (React/Vue/Svelte) invokes commands via <code>invoke&lt;T&gt;()</code> with type-safe JSON serialization. Tauri v2 introduces a capability-based permission system, multi-window support, and mobile targets (iOS/Android).</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Frontend → invoke('cmd', args) → IPC bridge → Rust #[tauri::command] → Result&lt;T&gt; → JSON → Frontend</strong></li><li><strong>Tauri v2 permissions</strong> — capability-based access control; commands declare required permissions at compile time</li><li><strong>Event system</strong> — Rust emits events via <code>app.emit()</code>; frontend listens via <code>listen('event', callback)</code> for push notifications</li><li><strong>Tauri State</strong> — <code>tauri::State&lt;T&gt;</code> for shared Rust state across commands (DB pools, config, app state)</li><li><strong>File system</strong> — uses OS-native file dialogs; Rust handles I/O, frontend gets results</li><li><strong>System tray + notifications</strong> — Rust manages OS-level features; frontend only handles UI</li><li><strong>Auto-update</strong> — Tauri's built-in updater checks GitHub releases or custom endpoints</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src-tauri/</span>                     <span class=\"comment\"># Rust backend</span>\n    ├── Cargo.toml\n    ├── tauri.conf.json               <span class=\"comment\"># Window config, bundle, permissions</span>\n    ├── <span class=\"dir\">capabilities/</span>               <span class=\"comment\"># Tauri v2 permission files</span>\n    │   └── default.json\n    ├── <span class=\"dir\">icons/</span>                      <span class=\"comment\"># App icons (all platforms)</span>\n    └── <span class=\"dir\">src/</span>\n        ├── main.rs                   <span class=\"comment\"># tauri::Builder + plugin registration</span>\n        ├── lib.rs                    <span class=\"comment\"># Module declarations</span>\n        ├── <span class=\"dir\">commands/</span>\n        │   ├── mod.rs\n        │   ├── filesystem.rs         <span class=\"comment\"># File read/write/dialog</span>\n        │   ├── window.rs             <span class=\"comment\"># Window management</span>\n        │   ├── updater.rs            <span class=\"comment\"># Auto-update logic</span>\n        │   └── system.rs             <span class=\"comment\"># System info, shell</span>\n        ├── <span class=\"dir\">state/</span>\n        │   └── app_state.rs          <span class=\"comment\"># tauri::State store</span>\n        └── <span class=\"dir\">utils/</span>\n            └── error.rs              <span class=\"comment\"># Custom error types</span>\n    <span class=\"dir\">src/</span> (frontend)\n    ├── main.ts                       <span class=\"comment\"># React/Vue/Svelte entry</span>\n    ├── <span class=\"dir\">features/</span>\n    │   ├── <span class=\"dir\">editor/</span>\n    │   ├── <span class=\"dir\">settings/</span>\n    │   └── <span class=\"dir\">dashboard/</span>\n    ├── <span class=\"dir\">lib/</span>\n    │   ├── tauri.ts                  <span class=\"comment\"># Typed invoke wrapper</span>\n    │   └── events.ts                 <span class=\"comment\"># Event listeners</span>\n    ├── <span class=\"dir\">components/</span>\n    ├── <span class=\"dir\">stores/</span>                     <span class=\"comment\"># Zustand / Pinia</span>\n    └── <span class=\"dir\">styles/</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Tauri",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Tauri when:</strong> Team has zero Rust experience — the Rust backend adds learning curve vs Electron's Node.js. Need legacy Electron plugins/web APIs (USB, WebHID, complex WebRTC) — native WebView support varies. Targeting Linux with complex WebView requirements — WebKitGTK inconsistencies exist. Need maximum web platform compatibility — Electron's bundled Chromium guarantees consistency.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>React / Vue / Svelte + Vite</td></tr><tr><td>IPC</td><td>#[tauri::command] + invoke() (built-in)</td></tr><tr><td>State (Rust)</td><td>tauri::State (built-in)</td></tr><tr><td>State (Frontend)</td><td>Zustand / Pinia</td></tr><tr><td>SQLite</td><td>tauri-plugin-sql (rusqlite)</td></tr><tr><td>File Dialog</td><td>tauri-plugin-dialog</td></tr><tr><td>Notifications</td><td>tauri-plugin-notification</td></tr><tr><td>Auto-Update</td><td>tauri-plugin-updater</td></tr><tr><td>Testing</td><td>cargo test + Vitest + Playwright</td></tr><tr><td>Packaging</td><td>tauri-bundler (MSI, DMG, AppImage, deb)</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "htmx",
    "cat": "frontend",
    "name": "htmx",
    "icon": "HT",
    "archBadge": "HATEOAS Hypermedia-Driven Architecture",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Server-rendered HTML with htmx attributes for partial updates.</strong> The server returns full HTML fragments. Use <code>hx-get</code>, <code>hx-post</code>, <code>hx-target</code>, and <code>hx-swap</code> attributes directly in HTML. Any backend (Express, Flask, Go) serves HTML. No client-side state management — state lives on the server. Simple, direct, old-school web with AJAX superpowers.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">templates/</span>\n├── base.html              <span class=\"comment\"># Layout with htmx script</span>\n├── <span class=\"dir\">pages/</span>\n│   ├── index.html         <span class=\"comment\"># Full page</span>\n│   └── dashboard.html\n├── <span class=\"dir\">partials/</span>\n│   ├── todo-list.html     <span class=\"comment\"># hx-target fragment</span>\n│   └── user-form.html\n<span class=\"dir\">static/</span>\n├── htmx.min.js\n└── styles.css\n<span class=\"dir\">routes/</span>                 <span class=\"comment\"># Server routes return HTML</span>\n└── app.py / server.ts\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>HATEOAS Hypermedia-Driven Architecture.</strong> htmx extends HTML with attributes that trigger AJAX requests and swap returned HTML into the DOM. The server is the single source of truth — it returns HTML fragments, not JSON. No client-side routing, no state management library, no build step. The architecture shifts complexity from the client to the server: views, partials, and templates are all server-rendered. WebSockets and SSE via <code>hx-ext</code> for real-time features. Hyperscript for inline scripting without a framework.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>UI event → hx-get/post/put/delete → Server → HTML fragment → hx-target element → DOM swap</strong></li><li><strong>Server is the single source of truth</strong> — state lives in the backend (DB, session, cache); no client-side state duplication</li><li><strong>No JSON serialization</strong> — the network payload is HTML; browsers render it natively</li><li><strong>hx-target + hx-swap</strong> — declarative DOM update targets (<code>#id</code>, <code>this</code>, <code>closest div</code>) with swap strategies (innerHTML, outerHTML, beforeend)</li><li><strong>hx-trigger</strong> — events that trigger requests: <code>click</code>, <code>input changed delay:500ms</code>, <code>revealed</code>, <code>every 10s</code></li><li><strong>hx-boost</strong> — progressively enhances anchors/forms to use AJAX; degrades gracefully without JS</li><li><strong>WebSocket/SSE</strong> via <code>hx-ext=\"ws\"</code> or <code>hx-ext=\"sse\"</code> for real-time partial updates</li><li><strong>Hyperscript</strong> — inline, English-like scripting for UI interactions without a framework</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">backend/</span> (Python FastAPI example)\n    ├── <span class=\"dir\">app/</span>\n    │   ├── main.py                    <span class=\"comment\"># FastAPI/Flask app entry</span>\n    │   ├── <span class=\"dir\">routes/</span>\n    │   │   ├── pages.py               <span class=\"comment\"># Full page routes</span>\n    │   │   └── partials.py            <span class=\"comment\"># htmx fragment endpoints</span>\n    │   ├── <span class=\"dir\">services/</span>\n    │   │   └── contact_service.py\n    │   └── <span class=\"dir\">templates/</span>\n    │   ├── <span class=\"dir\">layouts/</span>\n    │   │   └── base.html              <span class=\"comment\"># Shell: head, nav, footer</span>\n    │   ├── <span class=\"dir\">pages/</span>\n    │   │   ├── index.html\n    │   │   ├── dashboard.html\n    │   │   └── contacts.html\n    │   └── <span class=\"dir\">partials/</span>              <span class=\"comment\"># htmx response fragments</span>\n    │       ├── contact-row.html        <span class=\"comment\"># Single row template</span>\n    │       ├── contact-form.html\n    │       ├── search-results.html\n    │       ├── modal.html\n    │       └── notification.html\n    <span class=\"dir\">static/</span>\n    ├── htmx.min.js                    <span class=\"comment\"># htmx core (~14KB)</span>\n    ├── <span class=\"dir\">ext/</span>\n    │   ├── ws.js                      <span class=\"comment\"># WebSocket extension</span>\n    │   └── sse.js                     <span class=\"comment\"># SSE extension</span>\n    └── styles.css\n    <span class=\"dir\">web/</span> (optional TypeScript assets)\n    └── hyperscript.js                <span class=\"comment\"># Inline scripting</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use htmx",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use htmx when:</strong> Building an offline-first PWA — htmx requires a server connection. Need complex client-side interactions (drag-and-drop, canvas, rich text editors) — htmx is HTML-centric. App is a pure SPA with heavy client-side state — React/Vue handle this better. Team expects a JSON API + client pattern — htmx shifts complexity to server-rendered HTML.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Backend</td><td>Any (Express, Flask, Django, FastAPI, Go, Rails, Laravel)</td></tr><tr><td>HTML Extensions</td><td>htmx (~14KB, no build step)</td></tr><tr><td>Inline Scripting</td><td>Hyperscript / Alpine.js</td></tr><tr><td>CSS</td><td>Tailwind CSS / Pico.css / Bootstrap</td></tr><tr><td>Templating</td><td>Jinja2 / EJS / Go templates / ERB</td></tr><tr><td>Real-Time</td><td>htmx WebSocket/SSE extensions</td></tr><tr><td>Form Validation</td><td>Server-side (return HTML errors)</td></tr><tr><td>Testing</td><td>Backend tests (pytest, jest) + Playwright for E2E</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "elysia",
    "cat": "backend",
    "name": "Bun / Elysia",
    "icon": "EY",
    "archBadge": "Decorator-Driven + End-to-End Type Safety",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Elysia app with route decorators in a single file.</strong> Use Elysia's chain API: <code>new Elysia().get('/users', ...).post('/users', ...)</code>. Built-in validation via <code>t.String()</code> (Elysia's type system). Bun's native SQLite for storage. No separate service layer — handlers contain logic directly. Minimal boilerplate, maximum speed (Bun runtime).</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── index.ts               <span class=\"comment\"># new Elysia().listen(3000)</span>\n├── <span class=\"dir\">routes/</span>\n│   ├── auth.ts\n│   └── users.ts\n├── <span class=\"dir\">models/</span>               <span class=\"comment\"># Elysia t.Object types</span>\n│   └── user.ts\n├── <span class=\"dir\">db/</span>\n│   ├── schema.ts           <span class=\"comment\"># Drizzle/Bun SQLite schema</span>\n│   └── index.ts\n└── <span class=\"dir\">middleware/</span>\n└── auth.ts\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Decorator-Driven Architecture with End-to-End Type Safety.</strong> Elysia runs on Bun's JavaScriptCore engine — 4x faster than Node.js for I/O-heavy workloads. The framework uses a decorator chain pattern: <code>.use(plugin)</code>, <code>.guard({...})</code>, <code>.derive(ctx => ...)</code>. Elysia's <code>t</code> (type system) provides inline validation and OpenAPI generation. Eden Treaty generates a fully typed client from server types — no code generation step. Plugins compose routes, middleware, and lifecycle hooks into reusable modules.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>HTTP → Elysia lifecycle → Guard → Resolve → Before Handle → Handler → After Handle → Response</strong></li><li><strong>Elysia lifecycle</strong> — hooks at every stage: <code>onRequest</code>, <code>onBeforeHandle</code>, <code>onAfterHandle</code>, <code>onError</code></li><li><strong>.derive()</strong> — transform/derive data from context into typed properties accessible in handlers</li><li><strong>Eden Treaty</strong> — generates a fully typed client from Elysia server types; <code>client.api.users.get()</code> infers response types</li><li><strong>t (type system)</strong> — <code>t.Object({ name: t.String() })</code> validates at runtime and generates TypeScript types + OpenAPI</li><li><strong>Bun native APIs</strong> — Bun.sql (SQLite), Bun.file (file system), Bun.password (bcrypt), Bun.crypto — no npm dependencies</li><li><strong>Plugin composition</strong> — reusable modules that inject routes, middleware, and lifecycle hooks agnostically</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── index.ts                        <span class=\"comment\"># new Elysia().use(plugins).listen(Bun.env.PORT)</span>\n    ├── <span class=\"dir\">plugins/</span>\n    │   ├── auth.plugin.ts              <span class=\"comment\"># JWT + cookie auth as Elysia plugin</span>\n    │   ├── cors.plugin.ts\n    │   ├── swagger.plugin.ts            <span class=\"comment\"># @elysiajs/swagger</span>\n    │   └── static.plugin.ts            <span class=\"comment\"># @elysiajs/static</span>\n    ├── <span class=\"dir\">routes/</span>\n    │   ├── index.ts                    <span class=\"comment\"># Aggregates route plugins</span>\n    │   ├── auth.routes.ts\n    │   ├── users.routes.ts\n    │   └── upload.routes.ts\n    ├── <span class=\"dir\">services/</span>                     <span class=\"comment\"># Business logic — zero Elysia imports</span>\n    │   ├── auth.service.ts\n    │   └── user.service.ts\n    ├── <span class=\"dir\">models/</span>                       <span class=\"comment\"># Elysia t schemas (types + validation + OpenAPI)</span>\n    │   ├── user.model.ts               <span class=\"comment\"># t.Object({...})</span>\n    │   └── common.model.ts\n    ├── <span class=\"dir\">db/</span>\n    │   ├── index.ts                     <span class=\"comment\"># Drizzle client + Bun.sql connection</span>\n    │   ├── schema.ts                    <span class=\"comment\"># Drizzle table definitions</span>\n    │   └── <span class=\"dir\">migrations/</span>\n    ├── <span class=\"dir\">middleware/</span>\n    │   ├── error.middleware.ts          <span class=\"comment\"># onError hook</span>\n    │   └── rate-limit.middleware.ts\n    ├── <span class=\"dir\">utils/</span>\n    │   └── eden.ts                      <span class=\"comment\"># Exported server type for Eden Treaty client</span>\n    └── <span class=\"dir\">lib/</span>\n        └── env.ts                       <span class=\"comment\"># Typed environment variables</span>\n    <span class=\"dir\">tests/</span>\n        ├── auth.test.ts\n        └── users.test.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Elysia",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Elysia when:</strong> Need Node.js native addons — Bun's Node.js compat is good but not 100%. Deploying to Cloudflare Workers — Hono is better optimized for edge. Team is heavily invested in Express/Fastify ecosystem — Elysia's plugin system is different. Need mature PostgreSQL ecosystem — Bun's native SQLite is great but Drizzle/pg via Node compat adds overhead.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Runtime</td><td>Bun</td></tr><tr><td>Web Framework</td><td>Elysia (Chain/Decorator API)</td></tr><tr><td>Type Client</td><td>Eden Treaty (built-in type inference)</td></tr><tr><td>ORM</td><td>Drizzle ORM + Bun.sql</td></tr><tr><td>Validation</td><td>Elysia t (type system — built-in)</td></tr><tr><td>Auth</td><td>@elysiajs/jwt + Bun.password</td></tr><tr><td>File Upload</td><td>Built-in <code>req.body</code> with Bun.file</td></tr><tr><td>API Docs</td><td>@elysiajs/swagger (auto-generated)</td></tr><tr><td>Testing</td><td>Bun test (built-in, Jest-compatible)</td></tr><tr><td>Deploy</td><td>Bun standalone binary / Docker</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "lit",
    "cat": "frontend",
    "name": "Lit / Web Components",
    "icon": "LT",
    "archBadge": "Reactive ReactiveElement + Web Component Lifecycle",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>LitElement components + Vite in a flat project.</strong> Each component is a class extending <code>LitElement</code> with <code>@customElement</code> decorator. Reactive properties via <code>@property()</code> and <code>@state()</code>. Data fetching in <code>connectedCallback()</code> or <code>firstUpdated()</code>. Components are framework-agnostic — they render anywhere. No separate state layer needed for simple apps.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── index.ts               <span class=\"comment\"># Import all components</span>\n├── <span class=\"dir\">components/</span>\n│   ├── my-app.ts\n│   ├── <span class=\"dir\">nav/</span>\n│   │   └── app-nav.ts\n│   ├── <span class=\"dir\">pages/</span>\n│   │   ├── home-page.ts\n│   │   └── login-page.ts\n│   └── <span class=\"dir\">shared/</span>\n│       ├── button.ts\n│       └── input.ts\n├── <span class=\"dir\">services/</span>             <span class=\"comment\"># API client</span>\n└── <span class=\"dir\">utils/</span>                <span class=\"comment\"># Helpers</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Reactive Web Components with LitElement and Context Protocol.</strong> Lit builds on Web Component standards — custom elements, shadow DOM, and HTML templates. The <code>@property()</code> decorator creates reactive properties that trigger re-renders on change. Lit's <code>@lit/context</code> provides a dependency injection protocol for passing data down the component tree without prop drilling. Components are framework-agnostic and interoperate with React, Vue, and Angular via standard custom elements. Lit SSR for server-side rendering.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Reactive properties</strong> — <code>@property()</code> attributes → property reflection; <code>@state()</code> for internal state</li><li><strong>Property change → async update cycle → re-render → lit-html diff → DOM update</strong></li><li><strong>Lit Context Protocol</strong> — <code>@provide()</code> and <code>@consume()</code> for dependency injection across the component tree</li><li><strong>Reactive controllers</strong> — <code>ReactiveController</code> class hooks into host lifecycle for shared reactive logic</li><li><strong>Events</strong> — standard DOM events with <code>CustomEvent</code>; <code>@eventOptions()</code> for passive/capture config</li><li><strong>Task (@lit/task)</strong> — declarative async data fetching with loading/error/data states built-in</li><li><strong>Lit SSR</strong> — server-renders custom elements to declarative shadow DOM; client hydrates without re-render</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── index.ts                        <span class=\"comment\"># Side-effect imports register custom elements</span>\n    ├── <span class=\"dir\">components/</span>\n    │   ├── <span class=\"dir\">app/</span>\n    │   │   ├── app-shell.ts             <span class=\"comment\"># Root component + router outlet</span>\n    │   │   └── app-context.ts           <span class=\"comment\"># @lit/context providers</span>\n    │   ├── <span class=\"dir\">pages/</span>\n    │   │   ├── home-page.ts\n    │   │   ├── login-page.ts\n    │   │   └── dashboard-page.ts\n    │   ├── <span class=\"dir\">features/</span>\n    │   │   ├── <span class=\"dir\">auth/</span>\n    │   │   │   ├── login-form.ts\n    │   │   │   └── auth-context.ts       <span class=\"comment\"># @provide('auth-context')</span>\n    │   │   └── <span class=\"dir\">search/</span>\n    │   │       ├── search-bar.ts\n    │   │       └── search-controller.ts  <span class=\"comment\"># ReactiveController</span>\n    │   └── <span class=\"dir\">ui/</span>                         <span class=\"comment\"># Design system primitives</span>\n    │       ├── button.ts\n    │       ├── input.ts\n    │       ├── card.ts\n    │       └── modal.ts\n    ├── <span class=\"dir\">controllers/</span>                  <span class=\"comment\"># ReactiveController classes</span>\n    │   ├── router-controller.ts         <span class=\"comment\"># Client-side router</span>\n    │   └── i18n-controller.ts\n    ├── <span class=\"dir\">services/</span>\n    │   ├── api.service.ts               <span class=\"comment\"># Fetch wrapper</span>\n    │   └── auth.service.ts\n    ├── <span class=\"dir\">context/</span>\n    │   └── app.context.ts               <span class=\"comment\"># createContext() definitions</span>\n    └── <span class=\"dir\">styles/</span>\n        ├── tokens.css                    <span class=\"comment\"># Design tokens (CSS custom properties)</span>\n        └── shared.ts                    <span class=\"comment\"># Shared CSS tagged template literals</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Lit",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Lit when:</strong> Need mature SSR with file-based routing — Next.js/Nuxt/SvelteKit are better. Building a complex SPA with rich state management — React/Vue has more mature ecosystem. Need the largest hiring pool — React dominates the market. App needs to integrate with React/Vue library ecosystems — Lit is framework-agnostic.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Component Base</td><td>LitElement (ReactiveElement)</td></tr><tr><td>Dependency Injection</td><td>@lit/context</td></tr><tr><td>Async Tasks</td><td>@lit/task</td></tr><tr><td>Routing</td><td>@lit-labs/router / Vaadin Router</td></tr><tr><td>Build</td><td>Vite / @web/dev-server</td></tr><tr><td>SSR</td><td>@lit-labs/ssr</td></tr><tr><td>Localization</td><td>@lit/localize</td></tr><tr><td>Design System</td><td>Shoelace / Spectrum Web Components</td></tr><tr><td>Testing</td><td>@web/test-runner + @open-wc/testing</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "gin",
    "cat": "backend",
    "name": "Gin",
    "icon": "GI",
    "archBadge": "Handler-Based + Middleware Chain (40x faster than Express)",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Gin router + handler functions in a single Go package.</strong> Use Gin's minimal API: <code>r.GET(\"/users/:id\", handler)</code>. Handlers call service functions directly. GORM or sqlc for data access. Middleware for auth and logging via <code>r.Use()</code>. No elaborate layering — Go's simplicity plus Gin's performance. Zero reflection-based validation overhead.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">cmd/server/</span>\n└── main.go              <span class=\"comment\"># Gin engine + routes</span>\n<span class=\"dir\">internal/</span>\n├── <span class=\"dir\">handlers/</span>\n│   ├── auth.go              <span class=\"comment\"># Login, Register handlers</span>\n│   └── user.go\n├── <span class=\"dir\">services/</span>\n│   ├── auth_service.go\n│   └── user_service.go\n├── <span class=\"dir\">models/</span>                 <span class=\"comment\"># Structs + GORM models</span>\n│   └── user.go\n├── <span class=\"dir\">database/</span>\n│   └── db.go                <span class=\"comment\"># Connection pool</span>\n└── <span class=\"dir\">middleware/</span>\n└── auth.go\ngo.mod\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Handler-Based Architecture with Middleware Chain and Interface DI.</strong> Gin is the most popular Go web framework — built on a radix-tree router for zero-allocation route matching (40x faster than Express). Handlers receive <code>*gin.Context</code> for request/response. Business logic lives in services with interface-based DI — no framework dependency. Gin's middleware chain (<code>r.Use()</code>) handles auth, logging, CORS, rate limiting. The project follows Go's standard <code>cmd/</code> + <code>internal/</code> layout with package-by-feature organization.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>HTTP → Radix-tree router → Middleware chain → Handler → Service → Repository → DB</strong></li><li><strong>Radix-tree routing</strong> — zero-allocation route matching; Gin benchmarks 40x faster than Express for routing</li><li><strong>*gin.Context</strong> — request-scoped context carrying parsed params, validated JSON, and response writer</li><li><strong>Binding + validation</strong> — <code>c.ShouldBindJSON(&amp;dto)</code> with <code>binding:\"required\"</code> struct tags; validator v10 inline</li><li><strong>Middleware chain</strong> — Gin middleware are functions <code>func(c *gin.Context)</code>; <code>c.Next()</code> continues; <code>c.Abort()</code> stops</li><li><strong>Interface-based DI</strong> — services depend on interfaces; <code>main.go</code> wires concrete implementations</li><li><strong>Error handling</strong> — handlers return <code>gin.H{\"error\": err.Error()}</code>; recovery middleware catches panics</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">cmd/server/</span>\n    └── main.go                         <span class=\"comment\"># Wire Gin engine + routes + DI</span>\n    <span class=\"dir\">internal/</span>\n    ├── <span class=\"dir\">handler/</span>\n    │   ├── auth_handler.go             <span class=\"comment\"># func Login(c *gin.Context)</span>\n    │   ├── user_handler.go\n    │   └── order_handler.go\n    ├── <span class=\"dir\">service/</span>\n    │   ├── auth_service.go             <span class=\"comment\"># Interface + impl</span>\n    │   └── user_service.go\n    ├── <span class=\"dir\">repository/</span>\n    │   ├── user_repository.go          <span class=\"comment\"># Interface</span>\n    │   └── user_repository_postgres.go  <span class=\"comment\"># PostgreSQL impl</span>\n    ├── <span class=\"dir\">model/</span>\n    │   ├── user.go                     <span class=\"comment\"># Domain struct + GORM tags</span>\n    │   ├── order.go\n    │   └── <span class=\"dir\">dto/</span>\n    │       ├── auth_dto.go             <span class=\"comment\"># LoginRequest, LoginResponse</span>\n    │       └── user_dto.go\n    ├── <span class=\"dir\">middleware/</span>\n    │   ├── auth.go                     <span class=\"comment\"># JWT verification</span>\n    │   ├── logger.go                   <span class=\"comment\"># Request logging</span>\n    │   ├── cors.go\n    │   └── recovery.go\n    ├── <span class=\"dir\">router/</span>\n    │   └── router.go                   <span class=\"comment\"># Route registration</span>\n    ├── <span class=\"dir\">config/</span>\n    │   └── config.go                   <span class=\"comment\"># Viper env loading</span>\n    └── <span class=\"dir\">infra/</span>\n    ├── <span class=\"dir\">database/</span>\n    │   ├── postgres.go                 <span class=\"comment\"># Connection pool</span>\n    │   └── <span class=\"dir\">migrations/</span>\n    └── <span class=\"dir\">redis/</span>\n        └── client.go\n    <span class=\"dir\">pkg/</span>                                <span class=\"comment\"># Reusable libraries</span>\n    └── <span class=\"dir\">response/</span>\n        └── response.go                 <span class=\"comment\"># Standardized JSON response</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Gin",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Gin when:</strong> Team is new to Go — Python/Node.js has lower barrier to entry. Need rich web framework with built-in ORM, admin panel — Django/Rails offers more out of the box. Building edge/serverless — Fiber or Hono are faster cold-start. Need async/await patterns — Go's goroutines are different paradigm.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>HTTP Router</td><td>Gin (radix-tree, zero-allocation)</td></tr><tr><td>ORM / Query</td><td>GORM 2.0 / sqlc</td></tr><tr><td>Validation</td><td>go-playground/validator (built-in binding)</td></tr><tr><td>Config</td><td>Viper</td></tr><tr><td>Auth</td><td>golang-jwt/jwt + gin-jwt</td></tr><tr><td>Migration</td><td>golang-migrate / GORM AutoMigrate</td></tr><tr><td>Logging</td><td>zap (structured, zero-allocation)</td></tr><tr><td>Testing</td><td>testify + httptest + testcontainers-go</td></tr><tr><td>Caching</td><td>go-redis + gin-contrib/cache</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "phoenix",
    "cat": "backend",
    "name": "Phoenix / Elixir",
    "icon": "PH",
    "archBadge": "MVC + LiveView + OTP Supervisors",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Phoenix Contexts + Ecto schemas in a standard Phoenix project.</strong> Use <code>mix phx.new</code> for project scaffolding. Controllers handle HTTP, Ecto handles persistence, HEEx templates render HTML. Contexts group related functionality (Accounts, Catalog). Phoenix generators create CRUD resources. No complex OTP patterns — just standard MVC with the functional Elixir flavor.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">lib/my_app/</span>\n├── application.ex         <span class=\"comment\"># OTP Application</span>\n├── <span class=\"dir\">accounts/</span>\n│   ├── accounts.ex        <span class=\"comment\"># Context module</span>\n│   └── user.ex            <span class=\"comment\"># Ecto schema</span>\n├── <span class=\"dir\">catalog/</span>\n├── <span class=\"dir\">my_app_web/</span>\n│   ├── endpoint.ex\n│   ├── router.ex\n│   ├── <span class=\"dir\">controllers/</span>\n│   └── <span class=\"dir\">templates/</span>\n<span class=\"dir\">priv/</span>\n└── <span class=\"dir\">repo/</span>\n└── <span class=\"dir\">migrations/</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>MVC + LiveView + OTP Supervisors for Production-Grade Resilience.</strong> Phoenix builds on Erlang's OTP — processes are lightweight (microseconds to spawn), isolated (crash doesn't cascade), and supervised (automatic restart). <strong>LiveView</strong> delivers real-time, server-rendered HTML over WebSockets without writing a line of JavaScript. <strong>Contexts</strong> serve as bounded contexts in DDD — grouping related schemas, functions, and business logic. <strong>PubSub</strong> (distributed pub/sub) powers cross-node communication. <strong>Channels</strong> for custom WebSocket communication. GenServers for stateful background processes.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>HTTP: Request → Endpoint → Router → Controller → Context → Ecto (Repo) → DB</strong></li><li><strong>LiveView</strong> — server-rendered HTML over persistent WebSocket; state lives in the LiveView process (GenServer); UI diffs pushed via morphdom</li><li><strong>PubSub</strong> — distributed pub/sub across cluster nodes; broadcast events to LiveViews, channels, and background processes</li><li><strong>OTP Supervisors</strong> — process supervision tree; child crashes restart automatically with configurable strategies (:one_for_one, :one_for_all)</li><li><strong>Ecto changesets</strong> — functional validation pipeline; cast → validate → constraint; no callbacks (explicit is better than implicit)</li><li><strong>GenServer</strong> — stateful background processes; handle_call (sync), handle_cast (async), handle_info (messages)</li><li><strong>Broadway</strong> — data ingestion pipelines with back-pressure and batching for high-throughput processing</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">lib/my_app/</span>                     <span class=\"comment\"># Business logic (Contexts)</span>\n    ├── application.ex                <span class=\"comment\"># OTP Application + supervision tree</span>\n    ├── <span class=\"dir\">accounts/</span>\n    │   ├── accounts.ex               <span class=\"comment\"># Context: public API</span>\n    │   ├── user.ex                   <span class=\"comment\"># Ecto schema + changesets</span>\n    │   └── user_token.ex\n    ├── <span class=\"dir\">catalog/</span>\n    │   ├── catalog.ex\n    │   ├── product.ex\n    │   └── category.ex\n    ├── <span class=\"dir\">orders/</span>\n    │   └── orders.ex\n    ├── <span class=\"dir\">release.ex</span>                     <span class=\"comment\"># Release hooks (migrations, seeds)</span>\n    └── <span class=\"dir\">repo.ex</span>                         <span class=\"comment\"># Ecto.Repo configuration</span>\n    <span class=\"dir\">lib/my_app_web/</span>                    <span class=\"comment\"># Web layer</span>\n    ├── endpoint.ex                    <span class=\"comment\"># HTTP + WebSocket endpoint</span>\n    ├── router.ex                      <span class=\"comment\"># Routes + pipelines</span>\n    ├── <span class=\"dir\">controllers/</span>\n    │   ├── user_session_controller.ex\n    │   └── page_controller.ex\n    ├── <span class=\"dir\">live/</span>                            <span class=\"comment\"># LiveView modules</span>\n    │   ├── <span class=\"dir\">product_live/</span>\n    │   │   ├── index.ex              <span class=\"comment\"># LiveView module</span>\n    │   │   ├── show.ex\n    │   │   ├── form_component.ex\n    │   │   └── index.html.heex       <span class=\"comment\"># HEEx template</span>\n    │   └── <span class=\"dir\">dashboard_live/</span>\n    ├── <span class=\"dir\">components/</span>\n    │   ├── <span class=\"dir\">core/</span>                       <span class=\"comment\"># Phoenix core components</span>\n    │   └── <span class=\"dir\">layouts/</span>\n    └── <span class=\"dir\">channels/</span>\n        └── <span class=\"dir\">user_socket.ex</span>               <span class=\"comment\"># WebSocket handler</span>\n    <span class=\"dir\">lib/my_app/workers/</span>               <span class=\"comment\"># Background job processors</span>\n    ├── email_worker.ex                <span class=\"comment\"># Oban job</span>\n    └── notification_worker.ex\n    <span class=\"dir\">priv/</span>\n    └── <span class=\"dir\">repo/migrations/</span>\n    <span class=\"dir\">config/</span>\n        ├── config.exs\n        ├── dev.exs\n        ├── prod.exs\n        └── runtime.exs\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Phoenix",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Phoenix when:</strong> Team has zero Elixir/functional programming experience — steep learning curve vs Python/Node.js. Building a simple CRUD API — OTP supervision is overkill. Need large ecosystem of third-party libs — Python/Node.js have larger. Deploying to serverless/FaaS — BEAM VM is stateful by design. Need maximum single-threaded CPU performance — BEAM is optimized for concurrency, not raw compute.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Web Framework</td><td>Phoenix</td></tr><tr><td>Persistence</td><td>Ecto (ORM + migrations)</td></tr><tr><td>Real-Time</td><td>LiveView + Channels (built-in)</td></tr><tr><td>Pub/Sub</td><td>Phoenix PubSub (built-in, distributed)</td></tr><tr><td>Background Jobs</td><td>Oban (PostgreSQL-backed)</td></tr><tr><td>Auth</td><td>phx.gen.auth (built-in generator)</td></tr><tr><td>Testing</td><td>ExUnit + Phoenix.ConnTest + LiveViewTest</td></tr><tr><td>Monitoring</td><td>Phoenix LiveDashboard + Telemetry</td></tr><tr><td>Deploy</td><td>Mix Release + Docker / Fly.io</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "qt",
    "cat": "desktop",
    "name": "Qt / QML",
    "icon": "QT",
    "archBadge": "C++ Core + QML ViewModel + Signal/Slot",
    "blocks": [
      {
        "title": "Small Project Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>QML UI + C++ backend classes in a CMake project.</strong> Use Qt's <code>qmlRegisterType&lt;&gt;()</code> to expose C++ classes to QML. UI in .qml files with declarative bindings. <code>Q_PROPERTY</code> macros expose C++ data to QML via signals. Business logic in C++ classes separated from UI. Simple <code>QNetworkAccessManager</code> for HTTP requests. No elaborate separation — C++ does the work, QML shows the result.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n<span class=\"dir\">src/</span>\n├── main.cpp               <span class=\"comment\"># QQmlApplicationEngine</span>\n├── <span class=\"dir\">qml/</span>\n│   ├── Main.qml\n│   ├── LoginPage.qml\n│   └── <span class=\"dir\">components/</span>\n│       └── Button.qml\n├── <span class=\"dir\">cpp/</span>\n│   ├── authmanager.h/.cpp  <span class=\"comment\"># Q_OBJECT + Q_PROPERTY</span>\n│   └── apiclient.h/.cpp\n└── CMakeLists.txt\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>C++ Core with QML ViewModel and Signal/Slot Communication.</strong> Qt's meta-object system (MOC) enables the signal/slot mechanism — a type-safe, thread-safe observer pattern that decouples components without shared state. The C++ layer implements business logic, data access, and system integration. QML provides the declarative UI with property bindings that auto-update when C++ properties change. Qt Model/View architecture (QAbstractListModel) for complex data display. CMake + Qt Resource System for cross-platform deployment (Windows, macOS, Linux, embedded).</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Q_PROPERTY signal → QML binding re-evaluation → auto UI update</strong> — no manual refresh</li><li><strong>Signal/Slot</strong> — C++ emits signal → QML slot handles; QML emits signal → C++ slot handles; type-safe, thread-safe, queued across threads</li><li><strong>Qt Model/View</strong> — <code>QAbstractListModel</code> → <code>ListView</code>; model changes emit <code>dataChanged()</code>; QML auto-updates visible cells</li><li><strong>QML context properties</strong> — <code>engine.rootContext()->setContextProperty(\"auth\", &amp;authManager)</code> injects C++ objects into QML</li><li><strong>Qt Resource System (.qrc)</strong> — bundles QML, images, and assets into the binary for single-file deployment</li><li><strong>Qt SQL</strong> — direct SQLite/PostgreSQL integration; models bind directly to database queries</li><li><strong>QThread + QThreadPool</strong> — worker threads for heavy computation; signals deliver results back to the UI thread</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── main.cpp                        <span class=\"comment\"># QQmlApplicationEngine + context setup</span>\n    ├── <span class=\"dir\">qml/</span>                              <span class=\"comment\"># QML UI layer</span>\n    │   ├── <span class=\"dir\">Main.qml</span>                       <span class=\"comment\"># ApplicationWindow root</span>\n    │   ├── <span class=\"dir\">pages/</span>\n    │   │   ├── LoginPage.qml\n    │   │   ├── DashboardPage.qml\n    │   │   └── SettingsPage.qml\n    │   ├── <span class=\"dir\">components/</span>\n    │   │   ├── <span class=\"dir\">common/</span>\n    │   │   │   ├── Button.qml\n    │   │   │   ├── TextField.qml\n    │   │   │   └── Card.qml\n    │   │   └── <span class=\"dir\">charts/</span>\n    │   │       └── LineChart.qml        <span class=\"comment\"># Qt Charts binding</span>\n    │   └── <span class=\"dir\">resources/</span>\n    │       ├── icons/\n    │       └── fonts/\n    ├── <span class=\"dir\">core/</span>                             <span class=\"comment\"># C++ business logic</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── auth_manager.h\n    │   │   └── auth_manager.cpp\n    │   ├── <span class=\"dir\">models/</span>\n    │   │   ├── user_model.h             <span class=\"comment\"># QAbstractListModel</span>\n    │   │   └── user_model.cpp\n    │   ├── <span class=\"dir\">services/</span>\n    │   │   ├── api_client.h\n    │   │   └── api_client.cpp\n    │   └── <span class=\"dir\">repositories/</span>\n    │       ├── user_repository.h        <span class=\"comment\"># Interface</span>\n    │       └── user_repository_sqlite.cpp\n    ├── <span class=\"dir\">infrastructure/</span>\n    │   ├── <span class=\"dir\">database/</span>\n    │   │   ├── database_manager.h/.cpp\n    │   │   └── <span class=\"dir\">migrations/</span>\n    │   └── <span class=\"dir\">network/</span>\n    │       └── network_manager.h/.cpp\n    ├── <span class=\"dir\">utils/</span>\n    │   ├── logger.h\n    │   └── settings.h                   <span class=\"comment\"># QSettings wrapper</span>\n    ├── resources.qrc                    <span class=\"comment\"># Qt Resource System</span>\n    └── CMakeLists.txt\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Qt",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Qt when:</strong> Team has zero C++ experience — the meta-object system adds complexity. Building a simple utility with minimal UI — Qt is heavyweight. Need web-based UI — Electron/Tauri is more natural. App must deploy to web browsers — Qt for WebAssembly is limited. Budget-constrained — Qt commercial licensing is expensive for closed-source products.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>UI Framework</td><td>Qt Quick (QML) / Qt Widgets</td></tr><tr><td>Build System</td><td>CMake + Qt MOC</td></tr><tr><td>Database</td><td>Qt SQL (SQLite, PostgreSQL, MySQL)</td></tr><tr><td>Networking</td><td>Qt Network (QNetworkAccessManager)</td></tr><tr><td>Serialization</td><td>QJsonDocument / protobuf</td></tr><tr><td>Charts</td><td>Qt Charts (built-in QML types)</td></tr><tr><td>Embedded</td><td>Qt for MCU / Qt for WebAssembly</td></tr><tr><td>Testing</td><td>Qt Test + Google Test (C++), qmltestrunner (QML)</td></tr><tr><td>Packaging</td><td>Qt Installer Framework / CPack</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "sveltekit-express",
    "cat": "fullstack",
    "name": "SvelteKit + Express",
    "icon": "SE",
    "archBadge": "SSR Gateway + 3-Tier API Backend",
    "blocks": [
      {
        "title": "Architecture Overview",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>SvelteKit SSR Gateway + Express 3-Tier API Backend.</strong> SvelteKit handles the frontend — SSR, file-based routing, form actions, and progressive enhancement. Express serves as a dedicated API backend — JSON REST endpoints with service/repository layers. SvelteKit hooks proxy authenticated requests to Express. This separation gives you SvelteKit's excellent DX for UI + Express's mature ecosystem for complex backend logic. The key insight: SvelteKit's <code>+server.ts</code> files serve as an API gateway, not the API itself.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser → SvelteKit SSR → Express API → DB</strong> — server-side rendering fetches from Express, caches response, renders HTML</li><li><strong>Browser → SvelteKit Form Action → Express API → DB</strong> — mutations go through SvelteKit's actions which call Express endpoints</li><li><strong>Browser → Express API (direct)</strong> — client-side fetch for real-time updates, WebSocket connections, file uploads — calls Express directly via CORS or same-origin proxy</li><li><strong>SvelteKit hooks.server.ts</strong> — session validation, JWT refresh, auth token attachment to upstream Express requests — single auth middleware</li><li><strong>SvelteKit +server.ts route handlers</strong> — API proxy routes that forward to Express with auth headers attached, or implement simple endpoints directly</li><li><strong>SvelteKit $state runes</strong> — client-side reactive state for UI interactivity; server state lives in Express + DB</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>frontend/                     <span class=\"comment\"># SvelteKit</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── app.html\n    │   ├── hooks.server.ts           <span class=\"comment\"># Auth, proxy to Express</span>\n    │   ├── <span class=\"dir\">routes/</span>\n    │   │   ├── +layout.svelte\n    │   │   ├── +page.svelte          <span class=\"comment\"># SSR renders with Express data</span>\n    │   │   ├── +page.server.ts       <span class=\"comment\"># Load: fetch Express API</span>\n    │   │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── <span class=\"dir\">dashboard/</span>\n    │   │   └── <span class=\"dir\">api/</span>                <span class=\"comment\"># Proxy routes → Express</span>\n    │   │       └── [...path]/+server.ts\n    │   ├── <span class=\"dir\">lib/</span>\n    │   │   ├── <span class=\"dir\">api/</span>\n    │   │   │   └── client.ts        <span class=\"comment\"># Express HTTP client</span>\n    │   │   ├── <span class=\"dir\">components/</span>\n    │   │   └── <span class=\"dir\">stores/</span>\n    │   └── <span class=\"dir\">lib/server/</span>             <span class=\"comment\"># Auth, session</span>\n    ├── svelte.config.js\n    ├── vite.config.ts\n    └── package.json\n    <span class=\"dir\">apps/</span>backend/                      <span class=\"comment\"># Express</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── index.ts                  <span class=\"comment\"># Express app + listen</span>\n    │   ├── app.ts                    <span class=\"comment\"># Middleware, routes</span>\n    │   ├── <span class=\"dir\">routes/</span>\n    │   │   ├── auth.routes.ts\n    │   │   ├── users.routes.ts\n    │   │   └── index.ts\n    │   ├── <span class=\"dir\">controllers/</span>\n    │   ├── <span class=\"dir\">services/</span>\n    │   ├── <span class=\"dir\">repositories/</span>\n    │   ├── <span class=\"dir\">middleware/</span>\n    │   ├── <span class=\"dir\">validators/</span>              <span class=\"comment\"># Zod schemas</span>\n    │   └── <span class=\"dir\">config/</span>\n    ├── tsconfig.json\n    └── package.json\n    <span class=\"dir\">packages/</span>shared/                    <span class=\"comment\"># Shared types</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── types.ts                  <span class=\"comment\"># DTOs, API contracts</span>\n    │   └── index.ts\n    └── package.json\n    turbo.json\n    package.json                       <span class=\"comment\"># Workspace root</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Small Project (Single Repo)",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>For smaller projects, co-locate Express inside SvelteKit.</strong> Use SvelteKit's <code>+server.ts</code> for simple endpoints and mount Express on a custom server for complex routes. Alternatively, use <code>hooks.server.ts</code> to directly call service functions (skip Express entirely for prototyping).</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── app.html\n    ├── hooks.server.ts               <span class=\"comment\"># Auth + DB client</span>\n    ├── <span class=\"dir\">routes/</span>\n    │   ├── +layout.svelte\n    │   ├── +page.svelte\n    │   ├── +page.server.ts           <span class=\"comment\"># DB queries directly</span>\n    │   └── <span class=\"dir\">api/</span>\n    │       ├── <span class=\"dir\">auth/</span>\n    │       │   └── login/+server.ts\n    │       └── <span class=\"dir\">webhooks/</span>\n    │           └── stripe/+server.ts\n    ├── <span class=\"dir\">lib/</span>\n    │   ├── <span class=\"dir\">components/</span>\n    │   └── <span class=\"dir\">stores/</span>\n    ├── <span class=\"dir\">lib/server/</span>\n    │   ├── db.ts                     <span class=\"comment\"># Drizzle/Prisma</span>\n    │   ├── auth.ts\n    │   └── services/                 <span class=\"comment\"># Business logic (optional)</span>\n    └── app.d.ts\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>SvelteKit's compile-time approach means zero runtime overhead on the frontend — components compile to vanilla JS DOM ops. Express's unopinionated nature means the backend can evolve from simple route handlers to full 3-tier service layers without rewriting. The separation is clean: SvelteKit owns the UI rendering + auth gateway; Express owns business logic, data access, and third-party integrations. Turborepo/Nx monorepo with shared types package ensures end-to-end type safety. This is the ideal stack for teams that want Svelte's frontend simplicity but need Express's backend maturity and ecosystem.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use SvelteKit + Express when:</strong> App is a simple CRUD with no complex business logic — SvelteKit alone with Drizzle is sufficient. Team is small and wants a single framework — Next.js full-stack or Remix is more cohesive. You need real-time features at scale — consider adding Socket.IO or switching to Elixir/Phoenix. Backend is purely serverless functions — Express adds unnecessary server management.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Monorepo</td><td>Turborepo / Nx</td></tr><tr><td>Frontend</td><td>SvelteKit (SSR + Svelte 5 Runes)</td></tr><tr><td>Backend</td><td>Express / Fastify</td></tr><tr><td>Validation</td><td>Zod (shared between frontend & backend)</td></tr><tr><td>ORM</td><td>Drizzle ORM / Prisma</td></tr><tr><td>Auth</td><td>Lucia Auth / Passport.js</td></tr><tr><td>API Client</td><td>openapi-fetch (typed HTTP client)</td></tr><tr><td>Logging</td><td>Pino</td></tr><tr><td>Testing</td><td>Vitest + Playwright (E2E)</td></tr><tr><td>Deploy</td><td>Docker Compose / Railway / Fly.io</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "ai-agent-stack",
    "cat": "ai",
    "name": "AI Agent Architecture",
    "icon": "AI",
    "archBadge": "Tool-Augmented LLM + RAG + Multi-Agent Orchestration",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Tool-Augmented LLM with RAG and Multi-Agent Orchestration.</strong> The core architecture pattern for production AI agents: an LLM (GPT-4o, Claude, or open-source) is augmented with a <strong>tool registry</strong> — functions the LLM can call (search, database query, API calls, code execution). <strong>RAG</strong> (Retrieval-Augmented Generation) grounds responses in your data via vector search. For complex tasks, a <strong>multi-agent orchestrator</strong> decomposes work across specialized sub-agents, each with their own tools and context window. This is not a single framework — it's the architectural pattern that LangChain, CrewAI, AutoGen, and Semantic Kernel all implement.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Agent Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>User Query → Orchestrator Agent → Task Decomposition → Sub-Agents → Tool Execution → Response Synthesis</strong></li><li><strong>RAG Pipeline:</strong> Document → Chunking → Embedding (text-embedding-3-small) → Vector Store (pgvector/Pinecone) → Similarity Search → Context Injection → LLM Generation</li><li><strong>Tool Registry Pattern:</strong> Each tool is a typed function (input schema via Zod/Pydantic, output schema) registered with the agent. The LLM decides which tools to call and in what order.</li><li><strong>Memory Architecture:</strong> Short-term (conversation buffer in context window) + Long-term (vector store + summary compression) + Working memory (scratchpad for multi-step reasoning)</li><li><strong>Guardrails Layer:</strong> Input validation → Prompt injection detection → Output validation → PII redaction — every I/O boundary</li><li><strong>Observability:</strong> Trace every LLM call, tool invocation, and agent decision. LangSmith / LangFuse / OpenTelemetry for production monitoring.</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── index.ts                      <span class=\"comment\"># Agent runtime entry</span>\n    ├── <span class=\"dir\">agents/</span>                       <span class=\"comment\"># Agent definitions</span>\n    │   ├── <span class=\"dir\">orchestrator/</span>\n    │   │   ├── orchestrator.agent.ts  <span class=\"comment\"># Task decomposition + routing</span>\n    │   │   └── prompts.ts            <span class=\"comment\"># System prompts</span>\n    │   ├── <span class=\"dir\">researcher/</span>\n    │   │   ├── researcher.agent.ts    <span class=\"comment\"># Web search + synthesis</span>\n    │   │   └── tools.ts              <span class=\"comment\"># Search tools</span>\n    │   ├── <span class=\"dir\">coder/</span>\n    │   │   ├── coder.agent.ts         <span class=\"comment\"># Code generation + review</span>\n    │   │   └── tools.ts              <span class=\"comment\"># File ops, linter, executor</span>\n    │   └── <span class=\"dir\">analyst/</span>\n    │       ├── analyst.agent.ts       <span class=\"comment\"># Data analysis + SQL</span>\n    │       └── tools.ts\n    ├── <span class=\"dir\">tools/</span>                         <span class=\"comment\"># Shared tool registry</span>\n    │   ├── registry.ts               <span class=\"comment\"># Tool registration + schema validation</span>\n    │   ├── <span class=\"dir\">search/</span>\n    │   │   ├── web-search.tool.ts\n    │   │   └── vector-search.tool.ts\n    │   ├── <span class=\"dir\">database/</span>\n    │   │   └── sql-query.tool.ts\n    │   └── <span class=\"dir\">api/</span>\n    │       └── http-client.tool.ts\n    ├── <span class=\"dir\">rag/</span>                           <span class=\"comment\"># Retrieval-Augmented Generation</span>\n    │   ├── <span class=\"dir\">pipeline/</span>\n    │   │   ├── chunker.ts            <span class=\"comment\"># Document splitting</span>\n    │   │   ├── embedder.ts           <span class=\"comment\"># Embedding generation</span>\n    │   │   ├── retriever.ts          <span class=\"comment\"># Vector similarity search</span>\n    │   │   └── reranker.ts           <span class=\"comment\"># Result re-ranking</span>\n    │   ├── <span class=\"dir\">stores/</span>\n    │   │   ├── vector-store.ts       <span class=\"comment\"># pgvector / Pinecone adapter</span>\n    │   │   └── doc-store.ts          <span class=\"comment\"># Document metadata store</span>\n    │   └── <span class=\"dir\">loaders/</span>\n    │       ├── pdf.loader.ts\n    │       ├── web.loader.ts\n    │       └── code.loader.ts\n    ├── <span class=\"dir\">memory/</span>                        <span class=\"comment\"># Agent memory systems</span>\n    │   ├── conversation-memory.ts    <span class=\"comment\"># Sliding window buffer</span>\n    │   ├── long-term-memory.ts       <span class=\"comment\"># Vector-based recall</span>\n    │   └── working-memory.ts         <span class=\"comment\"># Scratchpad for reasoning</span>\n    ├── <span class=\"dir\">guardrails/</span>\n    │   ├── input-guard.ts            <span class=\"comment\"># Prompt injection detection</span>\n    │   ├── output-guard.ts           <span class=\"comment\"># Response validation</span>\n    │   └── pii-redactor.ts           <span class=\"comment\"># PII scrubbing</span>\n    ├── <span class=\"dir\">observability/</span>\n    │   ├── tracer.ts                 <span class=\"comment\"># OpenTelemetry spans</span>\n    │   ├── logger.ts\n    │   └── metrics.ts\n    ├── <span class=\"dir\">llm/</span>\n    │   ├── provider.ts               <span class=\"comment\"># OpenAI / Anthropic / Ollama adapter</span>\n    │   ├── router.ts                 <span class=\"comment\"># Model routing (cost/quality)</span>\n    │   └── cache.ts                 <span class=\"comment\"># Response caching (Redis/semantic)</span>\n    └── <span class=\"dir\">config/</span>\n        └── index.ts                  <span class=\"comment\"># Env, model configs, tool settings</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Small Project (Single Agent)",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Single agent + tool functions in one file.</strong> For prototypes: define one agent with a system prompt, a few tool functions, and an LLM call loop. No multi-agent orchestration, no RAG pipeline — just prompt → tool calls → response. Use LangChain or the OpenAI SDK directly. A single <code>agent.ts</code> file with tools co-located.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── index.ts                      <span class=\"comment\"># CLI / HTTP endpoint</span>\n    ├── agent.ts                      <span class=\"comment\"># Agent loop + system prompt</span>\n    ├── <span class=\"dir\">tools/</span>\n    │   ├── search.ts\n    │   ├── database.ts\n    │   └── index.ts                  <span class=\"comment\"># Tool registry</span>\n    ├── llm.ts                        <span class=\"comment\"># OpenAI client wrapper</span>\n    └── <span class=\"dir\">prompts/</span>\n        └── system.md                 <span class=\"comment\"># System prompt template</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Why This Architecture Wins",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>The Tool-Augmented LLM pattern is the only architecture proven to work at scale for AI agents. Tool calling gives the LLM agency beyond text generation. RAG solves the hallucination problem by grounding responses in real data. Multi-agent orchestration handles tasks too complex for a single context window. This pattern separates concerns cleanly: LLM provider (pluggable), tool registry (typed), memory (hierarchical), guardrails (every boundary), and observability (every decision traced). The architecture is framework-agnostic — implement it with LangChain, CrewAI, or pure OpenAI SDK. The structure is what matters.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use this architecture when:</strong> Task is simple enough for a single LLM call — no agent loop needed. You don't need tool calling — just use the OpenAI chat API directly. Latency is critical and you can't tolerate multi-step reasoning. You're building a chatbot, not an agent — RAG alone may suffice. Budget is extremely constrained — each agent step costs LLM tokens.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Agent Framework</td><td>LangChain / CrewAI / AutoGen / OpenAI SDK</td></tr><tr><td>LLM Provider</td><td>OpenAI GPT-4o / Anthropic Claude / Ollama (local)</td></tr><tr><td>Vector Store</td><td>pgvector (PostgreSQL) / Pinecone / Chroma</td></tr><tr><td>Embeddings</td><td>text-embedding-3-small / Cohere Embed</td></tr><tr><td>Tool Validation</td><td>Zod / Pydantic (typed tool schemas)</td></tr><tr><td>Memory</td><td>Redis (short-term) + pgvector (long-term)</td></tr><tr><td>Observability</td><td>LangSmith / LangFuse / OpenTelemetry</td></tr><tr><td>Guardrails</td><td>Guardrails AI / Custom input/output validation</td></tr><tr><td>Deploy</td><td>FastAPI + Celery / Temporal for durable execution</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "vector-db",
    "cat": "ai",
    "name": "AI Data Layer (Vector DBs)",
    "icon": "VD",
    "archBadge": "Hybrid Search: Vector + Keyword + Graph",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Hybrid Search Architecture: Vector Similarity + Full-Text + Knowledge Graph.</strong> Production AI agents need a multi-modal data strategy. <strong>Vector search</strong> (pgvector, Pinecone) for semantic similarity — find documents by meaning, not keywords. <strong>Full-text search</strong> (PostgreSQL tsvector, Elasticsearch) for exact matches and keyword queries. <strong>Knowledge graphs</strong> (Neo4j, Apache AGE) for structured entity relationships. The most battle-tested approach: PostgreSQL with pgvector extension handles both relational data and vector search in one database — no separate vector service needed for most workloads.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data Flow Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Ingestion Pipeline:</strong> Raw docs → Chunker (semantic/sliding window) → Embedder (OpenAI/Cohere) → Vector Store (pgvector) → Metadata Store (PostgreSQL JSONB) — all in one DB transaction</li><li><strong>Query Pipeline (Hybrid):</strong> User query → Embed → Vector search (cosine similarity, top-k) + Full-text search (BM25) → Reciprocal Rank Fusion (RRF) → Reranker (Cohere/Cross-encoder) → Top-N results → Inject into LLM context</li><li><strong>PostgreSQL + pgvector</strong> — same DB for relational data AND vectors; <code>SELECT * FROM docs ORDER BY embedding <=> query_embedding LIMIT 10</code> runs in the same transaction as your app data</li><li><strong>Pinecone/Weaviate</strong> — dedicated vector DBs for scale (100M+ vectors); managed, high-throughput, with built-in metadata filtering</li><li><strong>Graph Layer (Neo4j)</strong> — entity extraction → relationship mapping → knowledge graph; LLM queries graph for multi-hop reasoning</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Directory Structure Blueprint",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>data/\n    ├── <span class=\"dir\">vector/</span>\n    │   ├── store.ts                  <span class=\"comment\"># pgvector / Pinecone adapter</span>\n    │   ├── embedder.ts               <span class=\"comment\"># OpenAI / Cohere embedding client</span>\n    │   └── query.ts                  <span class=\"comment\"># Similarity search + filtering</span>\n    ├── <span class=\"dir\">pipeline/</span>\n    │   ├── chunker.ts                <span class=\"comment\"># Semantic + sliding window</span>\n    │   ├── indexer.ts                <span class=\"comment\"># Batch document ingestion</span>\n    │   └── reranker.ts               <span class=\"comment\"># Cohere / cross-encoder</span>\n    ├── <span class=\"dir\">hybrid/</span>\n    │   ├── searcher.ts               <span class=\"comment\"># Vector + full-text + RRF fusion</span>\n    │   └── retriever.ts              <span class=\"comment\"># Unified retrieval interface</span>\n    ├── <span class=\"dir\">graph/</span>\n    │   ├── neo4j-client.ts           <span class=\"comment\"># Graph database client</span>\n    │   ├── entity-extractor.ts       <span class=\"comment\"># LLM-based entity extraction</span>\n    │   └── knowledge-graph.ts        <span class=\"comment\"># Graph construction + query</span>\n    ├── <span class=\"dir\">cache/</span>\n    │   ├── semantic-cache.ts         <span class=\"comment\"># Cache similar queries</span>\n    │   └── embedding-cache.ts        <span class=\"comment\"># Cache embeddings</span>\n    └── <span class=\"dir\">migrations/</span>\n        ├── 001_create_docs.sql\n        ├── 002_add_vector.sql         <span class=\"comment\"># CREATE EXTENSION vector</span>\n        └── 003_create_index.sql       <span class=\"comment\"># IVFFlat / HNSW index</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Database Selection Guide",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Scale</th><th>Best Choice</th><th>Why</th></tr><tr><td>&lt; 1M vectors</td><td>PostgreSQL + pgvector</td><td>Single DB for everything, no extra service, full SQL power. HNSW index for performance.</td></tr><tr><td>1M - 50M vectors</td><td>Pinecone / Weaviate</td><td>Managed, auto-scaling, built-in metadata filtering. Zero ops overhead.</td></tr><tr><td>&gt; 50M vectors</td><td>Pinecone Serverless / Elasticsearch</td><td>Massive scale, built for production search workloads.</td></tr><tr><td>Prototype / Local</td><td>Chroma / LanceDB</td><td>Embedded, zero-config. SQLite-like simplicity for vector search.</td></tr><tr><td>Knowledge Graph</td><td>Neo4j / Apache AGE</td><td>Entity relationships, multi-hop reasoning, graph-native queries.</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      },
      {
        "title": "Why pgvector Wins for Most Projects",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>pgvector eliminates the vector DB vs. relational DB tradeoff. Your app data (users, orders, documents) lives alongside embeddings in the same PostgreSQL database. Vector similarity search is a SQL query. Transactions span both relational and vector data. Backups, replication, and access control are unified. For 90% of AI applications, pgvector + PostgreSQL is the correct choice — Pinecone/Weaviate only when you hit scale limits. Drizzle ORM and Prisma both support pgvector natively.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Vector Store</td><td>pgvector (PostgreSQL) / Pinecone / Chroma</td></tr><tr><td>Embedding Model</td><td>text-embedding-3-small (OpenAI) / Cohere Embed v3</td></tr><tr><td>Full-Text Search</td><td>PostgreSQL tsvector / Elasticsearch</td></tr><tr><td>Graph DB</td><td>Neo4j / Apache AGE (PostgreSQL extension)</td></tr><tr><td>Document Loaders</td><td>LangChain loaders / LlamaIndex readers</td></tr><tr><td>Chunking</td><td>LangChain text splitters / Custom semantic chunker</td></tr><tr><td>Reranking</td><td>Cohere Rerank / BGE-reranker (local)</td></tr><tr><td>Caching</td><td>Redis (semantic cache) + PostgreSQL (embedding cache)</td></tr><tr><td>ORM</td><td>Drizzle ORM (pgvector support) / Prisma</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "nextjs-nestjs",
    "cat": "fullstack",
    "name": "Next.js + NestJS",
    "icon": "NN",
    "archBadge": "RSC Gateway + Hexagonal API Backend",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Next.js RSC Gateway + NestJS Hexagonal API.</strong> The most structured fullstack TypeScript pairing. Next.js handles SSR, React Server Components, and the BFF (Backend-For-Frontend) layer. NestJS provides the domain API with hexagonal architecture, CQRS, and DI. Both share TypeScript types via a monorepo package. This is the enterprise-grade choice: full type safety from database to UI, structured DI on the backend, React's ecosystem on the frontend.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser → Next.js SSR (RSC) → NestJS API → DB</strong> — server components fetch from NestJS, cache, and render HTML</li><li><strong>Browser → Next.js Server Actions → NestJS → DB</strong> — mutations go through Server Actions which call NestJS endpoints</li><li><strong>Browser → Next.js API Routes → NestJS (proxy)</strong> — thin proxy routes for client-side mutations, attach auth headers</li><li><strong>NestJS Hexagonal Layers:</strong> Controller (HTTP) → Application Service (use cases) → Domain Service (business rules) → Repository (ports) → Adapter (PostgreSQL/Redis)</li><li><strong>Shared package (@repo/shared)</strong> — Zod DTOs, TypeScript interfaces, error codes — single source of truth for API contracts</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># Next.js</span>\n    ├── <span class=\"dir\">src/</span>app/\n    │   ├── layout.tsx                 <span class=\"comment\"># Root layout + providers</span>\n    │   ├── page.tsx                   <span class=\"comment\"># RSC: fetch NestJS data</span>\n    │   ├── <span class=\"dir\">(auth)/</span>\n    │   │   ├── login/page.tsx\n    │   │   └── register/page.tsx\n    │   ├── <span class=\"dir\">(dashboard)/</span>\n    │   │   ├── layout.tsx\n    │   │   ├── page.tsx\n    │   │   └── analytics/page.tsx\n    │   └── <span class=\"dir\">api/</span>                     <span class=\"comment\"># Proxy → NestJS</span>\n    │       └── [...path]/route.ts\n    ├── <span class=\"dir\">src/</span>lib/\n    │   ├── api-client.ts              <span class=\"comment\"># Typed NestJS HTTP client</span>\n    │   └── auth.ts                    <span class=\"comment\"># next-auth config</span>\n    ├── next.config.ts\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># NestJS</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── main.ts                    <span class=\"comment\"># Bootstrap + global pipes</span>\n    │   ├── <span class=\"dir\">auth/</span>                      <span class=\"comment\"># Feature module</span>\n    │   │   ├── auth.controller.ts\n    │   │   ├── auth.service.ts\n    │   │   ├── auth.module.ts\n    │   │   ├── <span class=\"dir\">dto/</span>\n    │   │   │   ├── login.dto.ts\n    │   │   │   └── register.dto.ts\n    │   │   └── <span class=\"dir\">strategies/</span>\n    │   ├── <span class=\"dir\">users/</span>\n    │   ├── <span class=\"dir\">orders/</span>\n    │   ├── <span class=\"dir\">common/</span>\n    │   │   ├── <span class=\"dir\">decorators/</span>\n    │   │   ├── <span class=\"dir\">filters/</span>\n    │   │   ├── <span class=\"dir\">guards/</span>\n    │   │   └── <span class=\"dir\">interceptors/</span>\n    │   └── <span class=\"dir\">infra/</span>\n    │       ├── <span class=\"dir\">database/</span>\n    │       │   └── prisma.service.ts\n    │       └── <span class=\"dir\">config/</span>\n    ├── nest-cli.json\n    └── package.json\n    <span class=\"dir\">packages/</span>shared/\n    ├── <span class=\"dir\">src/</span>\n    │   ├── dto.ts                     <span class=\"comment\"># Zod schemas → OpenAPI</span>\n    │   ├── types.ts                   <span class=\"comment\"># Shared TypeScript types</span>\n    │   └── errors.ts                  <span class=\"comment\"># Error codes enum</span>\n    └── package.json\n    turbo.json\n    package.json\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Small Project (Single Next.js)",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>For smaller teams, skip NestJS.</strong> Use Next.js Server Actions with Drizzle directly. Add a <code>services/</code> layer in Next.js for business logic. Only split out NestJS when the backend grows beyond 15+ API routes or needs hexagonal architecture.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">src/</span>\n    ├── <span class=\"dir\">app/</span>\n    │   ├── layout.tsx\n    │   ├── page.tsx\n    │   ├── <span class=\"dir\">auth/</span>\n    │   └── <span class=\"dir\">dashboard/</span>\n    ├── <span class=\"dir\">lib/</span>\n    │   ├── db.ts                      <span class=\"comment\"># Drizzle client</span>\n    │   ├── auth.ts                    <span class=\"comment\"># next-auth</span>\n    │   └── <span class=\"dir\">services/</span>               <span class=\"comment\"># Business logic</span>\n    └── <span class=\"dir\">components/</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>This is the most structured TypeScript fullstack pairing. NestJS's DI container makes dependencies explicit and testable — something plain Express lacks. Next.js RSC eliminates the API-for-the-frontend problem. The shared types package means changing a DTO updates both frontend and backend simultaneously. The tradeoff: NestJS is verbose. You'll write more files than Express/Fastify. But for teams of 5+ building complex domains, the structure pays for itself in AI agent navigability and test coverage.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Next.js + NestJS when:</strong> Team under 3 people — NestJS ceremony outweighs benefits. Backend is simple CRUD — Next.js Server Actions + Drizzle is enough. You prefer functional composition over decorators. Rapid prototyping needed — Express/Fastify is faster to iterate.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Monorepo</td><td>Turborepo</td></tr><tr><td>Frontend</td><td>Next.js (App Router + RSC)</td></tr><tr><td>Backend</td><td>NestJS (Fastify adapter)</td></tr><tr><td>Validation</td><td>Zod (shared) + class-validator (NestJS)</td></tr><tr><td>ORM</td><td>Prisma / Drizzle</td></tr><tr><td>Auth</td><td>next-auth + @nestjs/passport</td></tr><tr><td>Testing</td><td>Vitest + Playwright (E2E) + Jest (NestJS)</td></tr><tr><td>Deploy</td><td>Docker Compose / Railway / Vercel + Fly.io</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "nextjs-fastapi",
    "cat": "fullstack",
    "name": "Next.js + FastAPI",
    "icon": "NF",
    "archBadge": "RSC BFF + Python Service Layer (AI-Ready)",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>The canonical AI agent stack.</strong> Next.js handles the UI, auth, and BFF layer. FastAPI owns the Python ecosystem — LLM calls, embedding generation, data pipelines, ML inference. FastAPI's async support and Pydantic validation make it the best Python backend for building tools that AI agents call. The architecture: Next.js RSC fetches from FastAPI endpoints, Server Actions proxy mutations. Shared contract via OpenAPI (generated from FastAPI) consumed by a typed TypeScript client.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser → Next.js RSC → FastAPI → DB/LLM</strong> — server components call FastAPI, cache, render</li><li><strong>Browser → Next.js Server Action → FastAPI</strong> — mutations hit FastAPI for business logic + Python processing</li><li><strong>FastAPI Dependency Injection</strong> — <code>Depends(get_db)</code> auto-injects DB sessions; <code>Depends(get_current_user)</code> for auth</li><li><strong>OpenAPI contract</strong> — FastAPI auto-generates OpenAPI spec → openapi-typescript generates typed TS client → shared in monorepo</li><li><strong>LangChain/LlamaIndex on FastAPI</strong> — agent tools exposed as FastAPI endpoints; Next.js calls them via typed client</li><li><strong>Background tasks</strong> — FastAPI's <code>BackgroundTasks</code> or Celery for long-running LLM chains; Next.js polls for results</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># Next.js</span>\n    ├── <span class=\"dir\">src/</span>app/\n    │   ├── layout.tsx\n    │   ├── page.tsx                   <span class=\"comment\"># RSC: fetch FastAPI</span>\n    │   ├── <span class=\"dir\">chat/</span>                      <span class=\"comment\"># AI chat UI</span>\n    │   │   ├── page.tsx\n    │   │   └── <span class=\"dir\">actions/</span>\n    │   │       └── send-message.ts   <span class=\"comment\"># Server Action → FastAPI</span>\n    │   └── <span class=\"dir\">api/</span>\n    │       └── [...path]/route.ts    <span class=\"comment\"># Proxy → FastAPI</span>\n    ├── <span class=\"dir\">src/</span>lib/\n    │   └── api-client.ts              <span class=\"comment\"># Generated from FastAPI OpenAPI</span>\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># FastAPI</span>\n    ├── <span class=\"dir\">app/</span>\n    │   ├── main.py                    <span class=\"comment\"># FastAPI app + CORS + lifespan</span>\n    │   ├── <span class=\"dir\">api/</span>\n    │   │   ├── <span class=\"dir\">v1/</span>\n    │   │   │   ├── __init__.py\n    │   │   │   ├── auth.py\n    │   │   │   ├── users.py\n    │   │   │   ├── chat.py            <span class=\"comment\"># LLM agent endpoints</span>\n    │   │   │   └── embeddings.py     <span class=\"comment\"># Vector search endpoints</span>\n    │   │   └── deps.py                <span class=\"comment\"># Dependency injection</span>\n    │   ├── <span class=\"dir\">core/</span>\n    │   │   ├── config.py              <span class=\"comment\"># Pydantic-settings</span>\n    │   │   ├── security.py\n    │   │   └── database.py\n    │   ├── <span class=\"dir\">models/</span>                    <span class=\"comment\"># SQLAlchemy ORM models</span>\n    │   ├── <span class=\"dir\">schemas/</span>                   <span class=\"comment\"># Pydantic DTOs</span>\n    │   ├── <span class=\"dir\">services/</span>\n    │   │   ├── auth_service.py\n    │   │   ├── chat_service.py        <span class=\"comment\"># LLM orchestration</span>\n    │   │   └── rag_service.py         <span class=\"comment\"># RAG pipeline</span>\n    │   ├── <span class=\"dir\">agents/</span>\n    │   │   ├── tools.py               <span class=\"comment\"># Agent tool definitions</span>\n    │   │   └── orchestrator.py\n    │   └── <span class=\"dir\">tasks/</span>                    <span class=\"comment\"># Celery background tasks</span>\n    ├── requirements.txt\n    └── pyproject.toml\n    <span class=\"dir\">packages/</span>api-client/                 <span class=\"comment\"># Generated TS types</span>\n    └── <span class=\"dir\">src/</span>\n        └── index.ts                   <span class=\"comment\"># Typed client from OpenAPI</span>\n    turbo.json\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>This is the go-to stack for AI-powered applications. Python owns the ML/AI ecosystem — there is no serious competitor. FastAPI gives Python a modern, async, type-safe HTTP layer. Next.js gives TypeScript the best React framework. Together: Python handles LLMs, embeddings, data science; TypeScript handles UI, auth, and the BFF. The OpenAPI contract between them ensures the integration doesn't rot. This architecture separates the languages cleanly rather than fighting either ecosystem.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Next.js + FastAPI when:</strong> You don't need Python (no ML/AI workloads) — single-language NestJS/Express is simpler. Team has no Python experience. Simple CRUD app — Next.js alone with Drizzle is sufficient. You need real-time WebSocket at scale — Python's async isn't as battle-tested as Node.js/Go.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>Next.js (App Router + RSC)</td></tr><tr><td>Backend</td><td>FastAPI + Uvicorn</td></tr><tr><td>LLM Framework</td><td>LangChain / LlamaIndex</td></tr><tr><td>ORM</td><td>SQLAlchemy 2.0 + Alembic (migrations)</td></tr><tr><td>Validation</td><td>Pydantic v2 (FastAPI native)</td></tr><tr><td>Vector Store</td><td>pgvector (PostgreSQL)</td></tr><tr><td>Task Queue</td><td>Celery + Redis / ARQ</td></tr><tr><td>API Contract</td><td>OpenAPI → openapi-typescript</td></tr><tr><td>Deploy</td><td>Vercel (Next.js) + Railway/Fly.io (FastAPI)</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "nuxt-laravel",
    "cat": "fullstack",
    "name": "Nuxt + Laravel",
    "icon": "NL",
    "archBadge": "SSR + Action Classes + Eloquent ORM",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Nuxt SSR + Laravel MVC with Action Classes.</strong> The most popular Vue fullstack pairing. Nuxt 3 handles SSR, auto-imports, and the Vue Composition API frontend. Laravel provides the backend with Eloquent ORM, Action classes, Queues, and Horizon. Communication via Laravel's API routes (JSON) consumed by Nuxt's <code>useFetch</code> / <code>$fetch</code>. Laravel Sanctum for SPA authentication. This stack ships features faster than almost any other due to Laravel's batteries-included philosophy.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser → Nuxt SSR → Laravel API → DB</strong> — <code>useAsyncData</code> fetches from Laravel on server; renders hydrated HTML</li><li><strong>Browser → Nuxt $fetch → Laravel API → DB</strong> — client-side mutations via <code>$fetch</code> with Sanctum cookie auth</li><li><strong>Laravel Action Classes</strong> — single-responsibility classes: <code>CreateOrderAction</code>, <code>ProcessPaymentAction</code>; controllers stay thin</li><li><strong>Eloquent ORM</strong> — Active Record pattern with relationships, scopes, accessors; migrations for schema versioning</li><li><strong>Laravel Queues + Horizon</strong> — background jobs (emails, reports, AI processing); Horizon dashboard for monitoring</li><li><strong>Laravel Sanctum</strong> — cookie-based SPA auth; no OAuth ceremony for first-party SPAs</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># Nuxt 3</span>\n    ├── <span class=\"dir\">pages/</span>\n    │   ├── index.vue\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── login.vue\n    │   │   └── register.vue\n    │   └── <span class=\"dir\">dashboard/</span>\n    ├── <span class=\"dir\">composables/</span>\n    │   ├── useAuth.ts                <span class=\"comment\"># Sanctum auth composable</span>\n    │   └── useApi.ts                 <span class=\"comment\"># $fetch wrapper</span>\n    ├── <span class=\"dir\">components/</span>\n    ├── <span class=\"dir\">server/</span>\n    │   └── api/                      <span class=\"comment\"># Nuxt server routes (BFF)</span>\n    ├── nuxt.config.ts\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># Laravel</span>\n    ├── <span class=\"dir\">app/</span>\n    │   ├── <span class=\"dir\">Http/</span>\n    │   │   ├── <span class=\"dir\">Controllers/</span>\n    │   │   │   └── <span class=\"dir\">Api/</span>\n    │   │   │       ├── AuthController.php\n    │   │   │       ├── UserController.php\n    │   │   │       └── OrderController.php\n    │   │   └── <span class=\"dir\">Middleware/</span>\n    │   ├── <span class=\"dir\">Actions/</span>                  <span class=\"comment\"># Single-responsibility classes</span>\n    │   │   ├── CreateOrderAction.php\n    │   │   └── ProcessPaymentAction.php\n    │   ├── <span class=\"dir\">Models/</span>\n    │   │   ├── User.php\n    │   │   └── Order.php\n    │   ├── <span class=\"dir\">Jobs/</span>\n    │   └── <span class=\"dir\">Services/</span>\n    ├── <span class=\"dir\">database/</span>\n    │   └── <span class=\"dir\">migrations/</span>\n    ├── <span class=\"dir\">routes/</span>\n    │   └── api.php\n    └── composer.json\n    <span class=\"dir\">packages/</span>shared/\n    └── <span class=\"dir\">types/</span>                       <span class=\"comment\"># TypeScript DTOs matching Laravel responses</span>\n        └── api.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>Laravel is the most productive backend framework in existence — migrations, queues, mail, notifications, caching, and auth are all built-in. Nuxt gives Vue the SSR and DX it deserves. This stack has the fastest time-to-MVP of any fullstack pairing. Laravel's convention-over-configuration eliminates decision fatigue. Nuxt's auto-imports and file-based routing do the same on the frontend. The result: two opinionated frameworks that align philosophically.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Nuxt + Laravel when:</strong> Need high concurrency — PHP's request-per-process model isn't ideal for WebSocket-heavy apps. Team is TypeScript-only — mixing PHP with TS adds context-switching cost. Need strict type safety across the stack — Laravel is dynamically typed.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>Nuxt 3 (Vue Composition API)</td></tr><tr><td>Backend</td><td>Laravel 11</td></tr><tr><td>Auth</td><td>Laravel Sanctum (SPA)</td></tr><tr><td>ORM</td><td>Eloquent</td></tr><tr><td>Queues</td><td>Laravel Queues + Horizon</td></tr><tr><td>Styling</td><td>Tailwind CSS / Nuxt UI</td></tr><tr><td>Testing</td><td>Pest (Laravel) + Vitest (Nuxt) + Playwright</td></tr><tr><td>Deploy</td><td>Laravel Forge / Vapor + Vercel/Netlify</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "react-go",
    "cat": "fullstack",
    "name": "React SPA + Go/Fiber",
    "icon": "RG",
    "archBadge": "Vite SPA + Package-by-Feature API",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>React SPA (Vite) + Go/Fiber Package-by-Feature API.</strong> Vite serves the React SPA with HMR. Go/Fiber provides a high-performance JSON API with implicit interface DI. React handles the UI state (Zustand signals) and TanStack Query owns server cache. Go handles business logic, data access, and concurrency (goroutines). Communication via typed fetch client generated from Go's OpenAPI spec. This stack is built for performance: Go's throughput + React's ecosystem.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser (SPA) → Go API → DB</strong> — React fetches from Go via typed HTTP client; Go handles auth middleware, validation, service layer</li><li><strong>Go Package-by-Feature</strong> — each feature (auth, users, orders) is a Go package with handler.go, service.go, repository.go; interfaces defined at call site</li><li><strong>Zustand for UI state</strong> — global client state; TanStack Query for server state (cache, refetch, optimistic updates)</li><li><strong>Go's implicit interfaces</strong> — repository interfaces defined in the service package, not the repository package; PostgreSQL and mock implementations satisfy automatically</li><li><strong>OpenAPI contract</strong> — Go generates OpenAPI spec (swaggo/swag); openapi-typescript generates typed TS client for React</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># React + Vite</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── main.tsx                   <span class=\"comment\"># ReactDOM.createRoot</span>\n    │   ├── App.tsx                    <span class=\"comment\"># Router + providers</span>\n    │   ├── <span class=\"dir\">features/</span>\n    │   │   ├── <span class=\"dir\">auth/</span>\n    │   │   │   ├── LoginPage.tsx\n    │   │   │   ├── useAuth.ts\n    │   │   │   └── authStore.ts       <span class=\"comment\"># Zustand</span>\n    │   │   ├── <span class=\"dir\">dashboard/</span>\n    │   │   └── <span class=\"dir\">profile/</span>\n    │   ├── <span class=\"dir\">shared/</span>\n    │   │   ├── <span class=\"dir\">components/</span>\n    │   │   └── <span class=\"dir\">utils/</span>\n    │   └── <span class=\"dir\">lib/</span>\n    │       └── api-client.ts          <span class=\"comment\"># Generated from Go OpenAPI</span>\n    ├── vite.config.ts\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># Go</span>\n    ├── <span class=\"dir\">cmd/</span>server/\n    │   └── main.go                    <span class=\"comment\"># Wire deps, start Fiber</span>\n    ├── <span class=\"dir\">internal/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── handler.go\n    │   │   ├── service.go\n    │   │   ├── repository.go          <span class=\"comment\"># Interface</span>\n    │   │   ├── repository_postgres.go <span class=\"comment\"># Impl</span>\n    │   │   └── middleware.go\n    │   ├── <span class=\"dir\">user/</span>\n    │   ├── <span class=\"dir\">order/</span>\n    │   ├── <span class=\"dir\">common/</span>\n    │   │   └── <span class=\"dir\">middleware/</span>\n    │   └── <span class=\"dir\">infra/</span>\n    │       ├── <span class=\"dir\">database/</span>\n    │       └── <span class=\"dir\">config/</span>\n    ├── go.mod\n    └── go.sum\n    <span class=\"dir\">packages/</span>api-client/\n    └── <span class=\"dir\">src/</span>\n        └── index.ts                   <span class=\"comment\"># Typed TS client</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>Go's compile-time safety and performance complement React's UI expressiveness perfectly. Go compiles to a single binary — deploy is trivial. React's ecosystem (component libraries, state management, devtools) is unmatched. Go's goroutines handle concurrency at scale without the complexity of Node.js worker threads. This is the stack for teams that want React's frontend power with Go's backend reliability and speed.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use React + Go when:</strong> You need SSR/SEO — React SPA needs extra setup. Team has no Go experience — Node.js backends have lower barrier. Rapid prototyping with ORM-heavy patterns — Prisma/Drizzle with Node.js is more mature.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>React 19 + Vite</td></tr><tr><td>Backend</td><td>Go + Fiber v3</td></tr><tr><td>State (UI)</td><td>Zustand</td></tr><tr><td>State (Server)</td><td>TanStack Query v5</td></tr><tr><td>Router</td><td>React Router v7</td></tr><tr><td>ORM</td><td>sqlc (Go) / Drizzle (TS)</td></tr><tr><td>API Contract</td><td>swaggo → openapi-typescript</td></tr><tr><td>Testing</td><td>Vitest + Playwright (FE) + testify (Go)</td></tr><tr><td>Deploy</td><td>Single Go binary + static S3/CloudFront</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "angular-dotnet",
    "cat": "fullstack",
    "name": "Angular + .NET Core",
    "icon": "AD",
    "archBadge": "Signals + Clean Architecture + CQRS/MediatR",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>The enterprise standard.</strong> Angular's opinionated architecture (modules, services, DI, signals) aligns naturally with .NET's Clean Architecture and MediatR CQRS. Both use dependency injection natively. Both enforce strong typing. Both have mature testing ecosystems. Angular Signals mesh with .NET's observable patterns. Communication via typed HttpClient services consuming ASP.NET's Swagger-generated API. This is the most structured fullstack pairing available — both frameworks enforce architecture rather than just enabling it.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser (Angular SPA) → .NET API → DB</strong> — typed HttpClient services in Angular call .NET endpoints</li><li><strong>.NET Clean Architecture Layers:</strong> API (Controllers) → Application (MediatR handlers + DTOs) → Domain (Entities + Value Objects) → Infrastructure (EF Core + external services)</li><li><strong>Angular Signal-Based State:</strong> <code>signal()</code> for local, <code>linkedSignal()</code> for derived, <code>resource()</code> for async data with built-in loading/error states</li><li><strong>CQRS with MediatR</strong> — Commands (mutations) and Queries (reads) are separated into handlers; no shared state</li><li><strong>EF Core</strong> — LINQ-based ORM with migrations, change tracking, and compiled queries for performance</li><li><strong>Angular Interceptors</strong> — attach JWT tokens, handle 401 refresh, transform errors — same pattern as .NET middleware</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># Angular</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── main.ts\n    │   ├── <span class=\"dir\">app/</span>\n    │   │   ├── app.config.ts          <span class=\"comment\"># Providers, DI, router</span>\n    │   │   ├── app.routes.ts\n    │   │   ├── <span class=\"dir\">features/</span>\n    │   │   │   ├── <span class=\"dir\">auth/</span>\n    │   │   │   │   ├── login/\n    │   │   │   │   ├── register/\n    │   │   │   │   └── auth.service.ts\n    │   │   │   ├── <span class=\"dir\">dashboard/</span>\n    │   │   │   └── <span class=\"dir\">users/</span>\n    │   │   ├── <span class=\"dir\">core/</span>\n    │   │   │   ├── <span class=\"dir\">interceptors/</span>\n    │   │   │   ├── <span class=\"dir\">guards/</span>\n    │   │   │   └── <span class=\"dir\">services/</span>\n    │   │   └── <span class=\"dir\">shared/</span>\n    │   └── environments/\n    ├── angular.json\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># .NET</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── <span class=\"dir\">API/</span>                        <span class=\"comment\"># Controllers + middleware</span>\n    │   │   ├── Controllers/\n    │   │   ├── Middleware/\n    │   │   └── Program.cs\n    │   ├── <span class=\"dir\">Application/</span>                <span class=\"comment\"># MediatR handlers + DTOs</span>\n    │   │   ├── <span class=\"dir\">Auth/</span>\n    │   │   │   ├── Commands/\n    │   │   │   │   └── LoginCommand.cs\n    │   │   │   └── Queries/\n    │   │   ├── <span class=\"dir\">Users/</span>\n    │   │   └── <span class=\"dir\">Common/</span>\n    │   │       └── Behaviors/         <span class=\"comment\"># Validation, logging pipelines</span>\n    │   ├── <span class=\"dir\">Domain/</span>                    <span class=\"comment\"># Entities + Value Objects</span>\n    │   │   ├── <span class=\"dir\">Entities/</span>\n    │   │   └── <span class=\"dir\">Enums/</span>\n    │   └── <span class=\"dir\">Infrastructure/</span>            <span class=\"comment\"># EF Core + external services</span>\n    │       ├── <span class=\"dir\">Persistence/</span>\n    │       │   ├── AppDbContext.cs\n    │       │   └── <span class=\"dir\">Migrations/</span>\n    │       └── <span class=\"dir\">Services/</span>\n    ├── API.csproj\n    └── appsettings.json\n    <span class=\"dir\">packages/</span>shared/\n    └── <span class=\"dir\">contracts/</span>                   <span class=\"comment\"># DTOs, enums (source of truth)</span>\n        └── ApiModels.cs\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>Angular and .NET share the same architectural philosophy: opinionated, structured, enterprise-grade. Both enforce DI. Both use strong typing. Both have first-class testing. The MediatR pipeline pattern (validation → handler → response) maps directly to Angular's interceptor → service → component flow. For enterprise teams building line-of-business applications, this is the most predictable, maintainable, and AI-agent-navigable fullstack pairing.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Angular + .NET when:</strong> Startup/small team — ceremony outweighs value. Rapid prototyping — Nuxt + Laravel or Next.js + Express ship faster. Need simple deployment — Go compiles to single binary. Team resists C# or enterprise patterns.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>Angular 19 (Signals + standalone)</td></tr><tr><td>Backend</td><td>ASP.NET Core 9</td></tr><tr><td>CQRS</td><td>MediatR</td></tr><tr><td>ORM</td><td>Entity Framework Core 9</td></tr><tr><td>Validation</td><td>FluentValidation</td></tr><tr><td>Mapping</td><td>AutoMapper / Mapster</td></tr><tr><td>Auth</td><td>ASP.NET Identity + JWT</td></tr><tr><td>API Docs</td><td>Swashbuckle (Swagger)</td></tr><tr><td>Testing</td><td>xUnit + Moq + Jasmine/Karma</td></tr><tr><td>Deploy</td><td>Azure / IIS / Docker</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "remix-hono",
    "cat": "fullstack",
    "name": "Remix + Hono",
    "icon": "RH",
    "archBadge": "Progressive Enhancement + Edge-First API",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Edge-first fullstack with progressive enhancement.</strong> Remix handles SSR, nested routing, loaders/actions, and progressive enhancement — forms work without JS. Hono provides a lightning-fast API layer that runs on Cloudflare Workers, Deno, Bun, or Node.js. Hono's RPC client (<code>hc</code>) gives end-to-end type safety without code generation. This stack is built for the edge: both frameworks minimize bundle size, optimize cold starts, and embrace Web Standards (Request/Response).</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser → Remix Loader → Hono API → DB</strong> — Remix loaders call Hono via typed RPC client; data flows through nested routes</li><li><strong>Browser → Remix Form → Action → Hono API → DB</strong> — native HTML forms, Remix actions call Hono for mutations</li><li><strong>Hono RPC Client</strong> — <code>client.api.users[':id'].$get({ param: { id: '123' } })</code> — fully typed without code generation</li><li><strong>Edge deployment</strong> — both run on Cloudflare Workers with near-zero cold start; Hono's Zod middleware validates at the edge</li><li><strong>No client-side state for server data</strong> — Remix revalidates loaders after mutations; no Redux/Zustand needed</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># Remix</span>\n    ├── <span class=\"dir\">app/</span>\n    │   ├── root.tsx                   <span class=\"comment\"># Root layout + meta</span>\n    │   ├── <span class=\"dir\">routes/</span>\n    │   │   ├── _index.tsx\n    │   │   ├── _auth.login.tsx\n    │   │   ├── _dashboard.tsx\n    │   │   └── _dashboard.settings.tsx\n    │   ├── <span class=\"dir\">components/</span>\n    │   └── <span class=\"dir\">services/</span>\n    │       └── api.server.ts          <span class=\"comment\"># Hono RPC client</span>\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># Hono</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── index.ts                   <span class=\"comment\"># Hono app + RPC type export</span>\n    │   ├── <span class=\"dir\">routes/</span>\n    │   │   ├── auth.ts\n    │   │   ├── users.ts\n    │   │   └── index.ts               <span class=\"comment\"># Route aggregation</span>\n    │   ├── <span class=\"dir\">middleware/</span>\n    │   │   ├── auth.ts\n    │   │   └── cors.ts\n    │   ├── <span class=\"dir\">validators/</span>              <span class=\"comment\"># Zod schemas</span>\n    │   └── <span class=\"dir\">db/</span>\n    │       └── schema.ts              <span class=\"comment\"># Drizzle schema</span>\n    ├── wrangler.toml\n    └── package.json\n    <span class=\"dir\">packages/</span>shared/\n    └── <span class=\"dir\">src/</span>\n        └── types.ts                   <span class=\"comment\"># Shared Zod schemas</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>Both Remix and Hono are built on Web Standards (Request/Response). Hono's RPC client eliminates the API contract drift problem without code generation — the types flow directly from the Hono app definition. Both deploy to the edge (Cloudflare Workers) with sub-millisecond cold starts. Remix's progressive enhancement means your app works before JavaScript loads. This is the most modern, standards-compliant fullstack pairing.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Remix + Hono when:</strong> Need complex client-side state — Remix intentionally minimizes it. Need large React ecosystem — Remix is smaller than Next.js. Need WebSocket at scale — Cloudflare Workers have limitations. Team is new to Web Standards patterns.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>Remix (React Router v7)</td></tr><tr><td>Backend</td><td>Hono (Cloudflare Workers)</td></tr><tr><td>Type Safety</td><td>Hono RPC Client (hc)</td></tr><tr><td>Validation</td><td>Zod (shared)</td></tr><tr><td>ORM</td><td>Drizzle ORM (edge-ready)</td></tr><tr><td>Auth</td><td>Better Auth / Lucia Auth</td></tr><tr><td>Styling</td><td>Tailwind CSS</td></tr><tr><td>Testing</td><td>Vitest + Playwright</td></tr><tr><td>Deploy</td><td>Cloudflare Workers + Pages</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "sveltekit-go",
    "cat": "fullstack",
    "name": "SvelteKit + Go/Fiber",
    "icon": "SG",
    "archBadge": "Compile-Time SSR + High-Performance API",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>The performance-obsessed fullstack.</strong> SvelteKit compiles to vanilla JS with zero runtime overhead. Go compiles to a single native binary with goroutines for concurrency. Together, they're the most performant fullstack pairing by raw metrics. SvelteKit handles SSR and form actions. Go/Fiber provides a high-throughput API with sub-millisecond response times. This stack is ideal for latency-sensitive applications where every millisecond counts.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser → SvelteKit SSR → Go API → DB</strong> — SvelteKit load functions call Go endpoints; server-rendered HTML with zero JS overhead</li><li><strong>Go's implicit interfaces</strong> — consumer-side interfaces defined in each feature package; PostgreSQL, Redis, and mock implementations satisfy automatically</li><li><strong>SvelteKit form actions</strong> — progressive enhancement; forms work before JS loads; Go handles the actual mutation</li><li><strong>Go goroutines</strong> — handle thousands of concurrent requests without thread pooling; channel-based communication for coordination</li><li><strong>Shared types via OpenAPI</strong> — Go generates spec; openapi-typescript generates typed SvelteKit client</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># SvelteKit</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── app.html\n    │   ├── hooks.server.ts            <span class=\"comment\"># Auth, Go API client init</span>\n    │   ├── <span class=\"dir\">routes/</span>\n    │   │   ├── +layout.svelte\n    │   │   ├── +page.svelte\n    │   │   ├── +page.server.ts        <span class=\"comment\"># Load: fetch Go API</span>\n    │   │   ├── <span class=\"dir\">auth/</span>\n    │   │   └── <span class=\"dir\">dashboard/</span>\n    │   └── <span class=\"dir\">lib/</span>\n    │       ├── api-client.ts          <span class=\"comment\"># Generated typed client</span>\n    │       └── <span class=\"dir\">components/</span>\n    ├── svelte.config.js\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># Go</span>\n    ├── <span class=\"dir\">cmd/</span>server/\n    │   └── main.go                    <span class=\"comment\"># Wire deps, Fiber start</span>\n    ├── <span class=\"dir\">internal/</span>\n    │   ├── <span class=\"dir\">auth/</span>\n    │   │   ├── handler.go\n    │   │   ├── service.go\n    │   │   └── repository.go\n    │   ├── <span class=\"dir\">user/</span>\n    │   ├── <span class=\"dir\">common/</span>\n    │   └── <span class=\"dir\">infra/</span>\n    └── go.mod\n    <span class=\"dir\">packages/</span>api-client/\n    └── <span class=\"dir\">src/</span>index.ts\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>SvelteKit and Go share a philosophy: compile-time safety, minimal runtime, maximum performance. Svelte's compiler eliminates the Virtual DOM. Go's compiler eliminates the JIT. The result is the fastest possible fullstack: compiled JavaScript on the frontend, compiled native binary on the backend. Both prioritize simplicity over ceremony. For performance-critical applications (dashboards, real-time analytics, trading UIs), this pairing has no equal.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use SvelteKit + Go when:</strong> Need rich ORM features — Prisma/Drizzle with Node.js is more mature. Team has no Go experience — single-language stack has lower friction. Need massive npm ecosystem — React/Vue have larger communities.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>SvelteKit (Svelte 5 Runes)</td></tr><tr><td>Backend</td><td>Go + Fiber v3</td></tr><tr><td>ORM</td><td>sqlc (Go) / Drizzle (TS client)</td></tr><tr><td>Auth</td><td>Lucia Auth + golang-jwt</td></tr><tr><td>Validation</td><td>Zod (FE) + go-playground/validator (BE)</td></tr><tr><td>API Contract</td><td>swaggo → openapi-typescript</td></tr><tr><td>Testing</td><td>Vitest + Playwright (FE) + testify (Go)</td></tr><tr><td>Deploy</td><td>Single Go binary + static SvelteKit export</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "astro-express",
    "cat": "fullstack",
    "name": "Astro + Express",
    "icon": "AE",
    "archBadge": "Content-First Islands + 3-Tier API",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>Content-first architecture with interactive islands.</strong> Astro renders static HTML by default — zero JS shipped unless explicitly opted in via islands (React, Svelte, Vue components). Express provides the JSON API for dynamic data and interactive islands. Astro handles content collections, Markdown/MDX, and SSG/SSR hybrid rendering. Express handles auth, business logic, and database access. This is the stack for content-heavy sites (marketing, docs, blogs, e-commerce) that need dynamic features without SPA overhead.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser → Astro SSG/SSR → Static HTML</strong> — content pages are pre-rendered; near-instant load with zero JS</li><li><strong>Browser → Astro Island → Express API → DB</strong> — interactive components (React/Svelte/Vue) fetch from Express; JS only loads for islands</li><li><strong>Astro Content Collections</strong> — type-safe Markdown/MDX with Zod schemas; built-in pagination, tags, RSS</li><li><strong>Express 3-Tier API</strong> — dedicated backend for auth, payments, user data; islands call it directly</li><li><strong>Hybrid rendering</strong> — Astro can SSR specific routes (dashboard, account) while SSG the rest (blog, landing pages)</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># Astro</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── <span class=\"dir\">pages/</span>\n    │   │   ├── index.astro\n    │   │   ├── blog/[...slug].astro\n    │   │   ├── dashboard.astro        <span class=\"comment\"># SSR: on-demand</span>\n    │   │   └── login.astro\n    │   ├── <span class=\"dir\">content/</span>\n    │   │   └── <span class=\"dir\">blog/</span>                  <span class=\"comment\"># Markdown/MDX posts</span>\n    │   ├── <span class=\"dir\">components/</span>\n    │   │   ├── Nav.astro\n    │   │   └── <span class=\"dir\">islands/</span>\n    │   │       ├── SearchBar.tsx      <span class=\"comment\"># React island</span>\n    │   │       └── Cart.svelte        <span class=\"comment\"># Svelte island</span>\n    │   ├── <span class=\"dir\">layouts/</span>\n    │   └── <span class=\"dir\">lib/</span>\n    │       └── api-client.ts          <span class=\"comment\"># Express HTTP client</span>\n    ├── astro.config.mjs\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># Express</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── index.ts\n    │   ├── app.ts\n    │   ├── <span class=\"dir\">routes/</span>\n    │   ├── <span class=\"dir\">controllers/</span>\n    │   ├── <span class=\"dir\">services/</span>\n    │   ├── <span class=\"dir\">repositories/</span>\n    │   └── <span class=\"dir\">middleware/</span>\n    └── package.json\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>Astro's island architecture is the correct model for content sites: ship HTML, hydrate only what needs JavaScript. Express provides a battle-tested API layer for the dynamic parts. The separation is clean: Astro owns content rendering and page structure; Express owns business logic and data. You can use React, Svelte, and Vue components in the same Astro page — each as an independent island. For content-driven sites with interactive features, this is the optimal architecture.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Astro + Express when:</strong> App is highly interactive (dashboards, real-time tools) — Next.js or SvelteKit handles client state better. Entire app is behind auth — Astro's static-first approach adds complexity. Need SPA-like navigation — Astro does full page loads by default.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>Astro (Islands Architecture)</td></tr><tr><td>Backend</td><td>Express / Fastify</td></tr><tr><td>Content</td><td>Astro Content Collections (MDX)</td></tr><tr><td>Interactive Islands</td><td>React / Svelte / Vue / Solid</td></tr><tr><td>ORM</td><td>Drizzle / Prisma</td></tr><tr><td>Auth</td><td>Lucia Auth / Passport.js</td></tr><tr><td>Styling</td><td>Tailwind CSS</td></tr><tr><td>Testing</td><td>Vitest + Playwright</td></tr><tr><td>Deploy</td><td>Vercel (Astro) + Railway (Express)</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
  {
    "id": "react-express",
    "cat": "fullstack",
    "name": "React SPA + Express",
    "icon": "RE",
    "archBadge": "Vite SPA + 3-Tier Service Layer",
    "blocks": [
      {
        "title": "Golden Standard Architecture",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>The most common fullstack pairing in production.</strong> React (Vite) SPA on the frontend. Express/Fastify 3-Tier API on the backend. This is the default architecture for teams that need a simple, proven, well-understood stack. React handles routing and UI state (Zustand). TanStack Query owns server cache. Express routes → controllers → services → repositories. No SSR complexity, no framework magic — just a clean separation of concerns with the largest ecosystem on both sides.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & Request Flow",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
        "contentHtml": "<ul><li><strong>Browser (SPA) → Express API → DB</strong> — React fetches JSON from Express; no SSR, no BFF layer</li><li><strong>Express 3-Tier:</strong> Routes (HTTP) → Controllers (validate + respond) → Services (business logic) → Repositories (data access)</li><li><strong>Zustand</strong> — global UI state (auth, theme, notifications); selector-based subscriptions</li><li><strong>TanStack Query v5</strong> — server state cache, background refetch, optimistic updates, infinite queries</li><li><strong>React Router v7</strong> — client-side routing with loaders (fetch data before render) and actions (handle mutations)</li><li><strong>JWT auth flow</strong> — login → Express returns access + refresh tokens → React stores in memory/Zustand → interceptor attaches to requests</li></ul>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Monorepo Directory Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">apps/</span>web/                            <span class=\"comment\"># React + Vite</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── main.tsx\n    │   ├── App.tsx                    <span class=\"comment\"># Router + QueryClient + providers</span>\n    │   ├── <span class=\"dir\">features/</span>\n    │   │   ├── <span class=\"dir\">auth/</span>\n    │   │   │   ├── LoginPage.tsx\n    │   │   │   ├── useAuth.ts\n    │   │   │   ├── authStore.ts       <span class=\"comment\"># Zustand</span>\n    │   │   │   └── authApi.ts         <span class=\"comment\"># API calls</span>\n    │   │   ├── <span class=\"dir\">dashboard/</span>\n    │   │   └── <span class=\"dir\">profile/</span>\n    │   ├── <span class=\"dir\">shared/</span>\n    │   │   ├── <span class=\"dir\">components/</span>\n    │   │   └── <span class=\"dir\">utils/</span>\n    │   └── <span class=\"dir\">lib/</span>\n    │       ├── api-client.ts          <span class=\"comment\"># Axios/fetch wrapper</span>\n    │       └── query-client.ts        <span class=\"comment\"># TanStack Query config</span>\n    ├── vite.config.ts\n    └── package.json\n    <span class=\"dir\">apps/</span>api/                            <span class=\"comment\"># Express</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── index.ts\n    │   ├── app.ts\n    │   ├── <span class=\"dir\">routes/</span>\n    │   │   ├── auth.routes.ts\n    │   │   ├── users.routes.ts\n    │   │   └── index.ts\n    │   ├── <span class=\"dir\">controllers/</span>\n    │   ├── <span class=\"dir\">services/</span>\n    │   ├── <span class=\"dir\">repositories/</span>\n    │   ├── <span class=\"dir\">middleware/</span>\n    │   ├── <span class=\"dir\">validators/</span>              <span class=\"comment\"># Zod schemas</span>\n    │   └── <span class=\"dir\">config/</span>\n    └── package.json\n    <span class=\"dir\">packages/</span>shared/\n    └── <span class=\"dir\">src/</span>\n        ├── types.ts                   <span class=\"comment\"># API DTOs</span>\n        └── validation.ts              <span class=\"comment\"># Shared Zod schemas</span>\n</div>",
        "fullWidth": true,
        "tier": "serious"
      },
      {
        "title": "Small Project (Co-located)",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"/></svg>",
        "contentHtml": "<p><strong>For smaller projects, serve the SPA from Express.</strong> Build React to <code>dist/</code>, serve it as static files from Express. Single deploy, no CORS, no monorepo. Express API routes at <code>/api/*</code>, React SPA catches everything else.</p>",
        "fullWidth": false,
        "tier": "small"
      },
      {
        "title": "Small Project Structure",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"/></svg>",
        "contentHtml": "<div class=\"fw-tree\">\n    <span class=\"dir\">client/</span>                          <span class=\"comment\"># React + Vite</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── main.tsx\n    │   ├── App.tsx\n    │   ├── <span class=\"dir\">pages/</span>\n    │   └── <span class=\"dir\">components/</span>\n    └── package.json\n    <span class=\"dir\">server/</span>                          <span class=\"comment\"># Express</span>\n    ├── <span class=\"dir\">src/</span>\n    │   ├── index.ts                    <span class=\"comment\"># Serve static + API routes</span>\n    │   ├── <span class=\"dir\">routes/</span>\n    │   └── <span class=\"dir\">services/</span>\n    └── package.json\n    package.json                        <span class=\"comment\"># Root: concurrently scripts</span>\n</div>",
        "fullWidth": true,
        "tier": "small"
      },
      {
        "title": "Why This Combination Works",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>",
        "contentHtml": "<p>This is the most deployed fullstack architecture. React's ecosystem (component libraries, state management, devtools) is unmatched. Express's simplicity means zero learning curve for the backend. The SPA + API separation has been battle-tested for a decade. It's not the most modern, not the most performant, but it's the most proven, the most documented, and the easiest to hire for. When in doubt, this is the safe choice.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use This Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use React SPA + Express when:</strong> SEO is critical — SPAs need extra SSR setup. You want SSR by default — Next.js, Remix, or SvelteKit are better. Backend needs structured DI — NestJS or Spring Boot provide more. Bundle size is critical — Svelte/Solid ship less JS.</p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Complementary Stack",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" /><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" /><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" /></svg>",
        "contentHtml": "<table class=\"fw-table\"><tr><th>Concern</th><th>Library</th></tr><tr><td>Frontend</td><td>React 19 + Vite</td></tr><tr><td>Backend</td><td>Express / Fastify</td></tr><tr><td>State (UI)</td><td>Zustand</td></tr><tr><td>State (Server)</td><td>TanStack Query v5</td></tr><tr><td>Router</td><td>React Router v7</td></tr><tr><td>Validation</td><td>Zod (shared)</td></tr><tr><td>ORM</td><td>Drizzle / Prisma</td></tr><tr><td>Auth</td><td>Passport.js + JWT</td></tr><tr><td>Forms</td><td>React Hook Form + Zod</td></tr><tr><td>Testing</td><td>Vitest + Playwright</td></tr><tr><td>Deploy</td><td>Static S3/CloudFront (FE) + Railway/Docker (API)</td></tr></table>",
        "fullWidth": false,
        "tier": "all"
      }
    ]
  },
];
