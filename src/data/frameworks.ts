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
        "contentHtml": "<p>\r\n                  <strong\r\n                    >Feature-Based MVVM with Unidirectional Data Flow.</strong\r\n                  >\r\n                  Each feature encapsulates its ViewModel (custom hooks /\r\n                  Zustand stores), View (React components), and Model\r\n                  (TypeScript types + API layer). Clean Architecture layers\r\n                  (domain / data / presentation) sit underneath for complex\r\n                  business logic.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Unidirectional data flow</strong> — props down,\r\n                    callbacks up\r\n                  </li>\r\n                  <li>\r\n                    <strong>Zustand / Jotai</strong> for global state with\r\n                    selector-based subscriptions\r\n                  </li>\r\n                  <li>\r\n                    <strong>TanStack Query</strong> owns server state (cache,\r\n                    refetch, optimistic)\r\n                  </li>\r\n                  <li>\r\n                    <strong>New Architecture</strong> (Fabric + TurboModules)\r\n                    eliminates async bridge — synchronous native calls\r\n                  </li>\r\n                  <li>\r\n                    <strong>React Navigation</strong> manages stack/tab/drawer\r\n                    state tree\r\n                  </li>\r\n                </ul>",
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
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Dart Streams</strong> underlie BLoC —\r\n                    <code>add(event)</code> →\r\n                    <code>on&lt;Event&gt;</code> handler →\r\n                    <code>emit(state)</code>\r\n                  </li>\r\n                  <li>\r\n                    <strong>BlocBuilder/BlocConsumer</strong> subscribe to state\r\n                    changes with selector support\r\n                  </li>\r\n                  <li>\r\n                    <strong>Riverpod</strong> providers use\r\n                    <code>ref.watch()</code> / <code>ref.read()</code> for\r\n                    reactive subscriptions\r\n                  </li>\r\n                  <li>\r\n                    <strong>AsyncValue</strong> handles loading/error/data\r\n                    states for server calls\r\n                  </li>\r\n                  <li>\r\n                    <strong>go_router</strong> integrates with Riverpod for\r\n                    route-level state\r\n                  </li>\r\n                </ul>",
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
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Server Components</strong> fetch data directly —\r\n                    async await in the component\r\n                  </li>\r\n                  <li>\r\n                    <strong\r\n                      >Database → Server Component → RSC payload → Client\r\n                      Component</strong\r\n                    >\r\n                  </li>\r\n                  <li>\r\n                    <strong>Server Actions</strong> replace API routes for\r\n                    mutations\r\n                  </li>\r\n                  <li>\r\n                    <strong>fetch() caching</strong> with revalidation tags +\r\n                    time-based + on-demand\r\n                  </li>\r\n                  <li>\r\n                    Global client state <strong>minimized</strong> — most state\r\n                    is server-derived\r\n                  </li>\r\n                  <li>When needed: Zustand or Jotai (sparingly)</li>\r\n                </ul>",
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
        "contentHtml": "<p>\r\n                  <strong\r\n                    >Layered Architecture with Angular Signals and Standalone\r\n                    Components.</strong\r\n                  >\r\n                  Standalone Components (no NgModules) +\r\n                  <strong>Signals</strong> (fine-grained reactivity replacing\r\n                  zone-based change detection) + Injectable services. For\r\n                  complex apps: Hexagonal Architecture — domain logic is pure\r\n                  TypeScript, Angular's DI provides adapters.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Signals</strong> — <code>signal()</code>,\r\n                    <code>computed()</code>, <code>effect()</code> for\r\n                    synchronous fine-grained reactivity\r\n                  </li>\r\n                  <li>\r\n                    Template expressions reading a signal re-evaluate\r\n                    <strong>only</strong> when that signal changes\r\n                  </li>\r\n                  <li>\r\n                    <code>@Input()</code> props down,\r\n                    <code>@Output()</code> events up\r\n                  </li>\r\n                  <li>\r\n                    <strong>NgRx Signals Store</strong> for structured,\r\n                    Redux-like state without RxJS\r\n                  </li>\r\n                  <li>Replaces Zone.js dirty checking entirely</li>\r\n                </ul>",
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
        "contentHtml": "<p>\r\n                  <strong>Composition API MVVM with Composables.</strong>\r\n                  <code>&lt;script setup&gt;</code> defines the ViewModel,\r\n                  <code>&lt;template&gt;</code> is the View, TypeScript\r\n                  interfaces are the Model. Composables serve as reusable\r\n                  ViewModels. Nuxt 3 adds SSR, file-based routing, and Nitro\r\n                  server engine.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Proxy-based reactivity</strong> —\r\n                    <code>ref()</code> and <code>reactive()</code> auto-notify\r\n                    on change\r\n                  </li>\r\n                  <li>\r\n                    Unidirectional: props down, <code>defineEmits()</code> up\r\n                  </li>\r\n                  <li>\r\n                    Composables: <code>useAuth()</code> returns\r\n                    <code>{ user, login, logout }</code>\r\n                  </li>\r\n                  <li>\r\n                    <code>useAsyncData</code> / <code>useFetch</code> for\r\n                    SSR-compatible fetching\r\n                  </li>\r\n                  <li><strong>Pinia</strong> for global state (SSR-safe)</li>\r\n                  <li>\r\n                    <strong>Nitro</strong> server engine: 15+ deployment targets\r\n                    zero-config\r\n                  </li>\r\n                </ul>",
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
        "contentHtml": "<p>\r\n                  <strong>Compile-Time MVVM with Reactive Declarations.</strong>\r\n                  Svelte compiles components to imperative DOM code at build\r\n                  time — no runtime framework. The\r\n                  <code>&lt;script&gt;</code> block is the ViewModel with\r\n                  <code>$:</code> declarations and <code>let</code> bindings.\r\n                  SvelteKit adds SSR, file-based routing, and form actions.\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "Data & State Flow",
        "svgIcon": "<svg\r\n                    viewBox=\"0 0 24 24\"\r\n                    fill=\"none\"\r\n                    stroke=\"currentColor\"\r\n                    stroke-width=\"2\"\r\n                  >\r\n                    <polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" /></svg\r\n                  >",
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong>Compiler-driven reactivity</strong> —\r\n                    <code>count = count + 1</code> triggers DOM updates\r\n                  </li>\r\n                  <li>\r\n                    <code>$: doubled = count * 2</code> — reactive declarations\r\n                    auto-recompute\r\n                  </li>\r\n                  <li>\r\n                    Props: <code>export let prop</code>, Events:\r\n                    <code>createEventDispatcher()</code>\r\n                  </li>\r\n                  <li>\r\n                    SvelteKit <code>load</code> functions for SSR data fetching\r\n                  </li>\r\n                  <li>\r\n                    <strong>Stores</strong> — <code>writable</code>,\r\n                    <code>readable</code>, <code>derived</code> with\r\n                    <code>$store</code> syntax\r\n                  </li>\r\n                  <li>\r\n                    <strong>Form actions</strong> replace API routes for\r\n                    mutations\r\n                  </li>\r\n                </ul>",
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
        "contentHtml": "<p>\r\n                  Svelte's compiler eliminates runtime overhead — compiled\r\n                  output is vanilla JS DOM ops. MVVM without ceremony: plain JS\r\n                  assignments generate DOM updates. <code>$:</code> reactive\r\n                  declarations are the ViewModel layer. Svelte stores provide\r\n                  global state with zero runtime cost. The DX is closest to\r\n                  \"just writing HTML and JS.\"\r\n                </p>",
        "fullWidth": false,
        "tier": "serious"
      },
      {
        "title": "When Not To Use Svelte",
        "svgIcon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/></svg>",
        "contentHtml": "<p><strong>Don't use Svelte when:</strong> Need large ecosystem of third-party components — React/Vue have more. Need enterprise-grade tooling and patterns. Need SSR with complex routing — Next.js/Remix is more mature. App requires strict TypeScript patterns.</p>",
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
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → Handler → Validate (struct tags) → Service →\r\n                      Repository → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>\r\n                    Explicit error handling — return <code>error</code> as last\r\n                    value\r\n                  </li>\r\n                  <li>\r\n                    No DI container — <code>main</code> constructs all\r\n                    dependencies\r\n                  </li>\r\n                  <li>Goroutines handle concurrency; channels coordinate</li>\r\n                  <li>\r\n                    Fiber middleware chain: auth, logging, CORS, rate limiting\r\n                  </li>\r\n                </ul>",
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
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → Router → Controller → ActiveRecord queries → DB →\r\n                      Model → View → HTML</strong\r\n                    >\r\n                  </li>\r\n                  <li>ActiveRecord callbacks/validations in the model</li>\r\n                  <li>\r\n                    Service objects: <code>CheckoutService.new.call</code> for\r\n                    multi-model orchestration\r\n                  </li>\r\n                  <li>Background jobs via Sidekiq / Active Job</li>\r\n                  <li>\r\n                    <strong>Hotwire</strong> (Turbo Streams + Stimulus):\r\n                    real-time DOM updates, minimal JS\r\n                  </li>\r\n                </ul>",
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
        "contentHtml": "<p>\r\n                  Rails' conventions eliminate architectural decision fatigue —\r\n                  the directory structure <em>is</em> the architecture.\r\n                  ActiveRecord colocates validations, callbacks, scopes, and\r\n                  associations with data. Service objects extract logic when\r\n                  models become too fat. Hotwire enables rich, reactive UIs with\r\n                  server-rendered HTML — the MVC pattern works for modern\r\n                  interfaces.\r\n                </p>",
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
        "contentHtml": "<table class=\"fw-table\">\r\n                  <tr>\r\n                    <th>Concern</th>\r\n                    <th>Library</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Auth</td>\r\n                    <td>Devise</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Authorization</td>\r\n                    <td>Pundit / Action Policy</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Background</td>\r\n                    <td>Sidekiq + Active Job</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>API</td>\r\n                    <td>Blueprinter / Jbuilder</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Search</td>\r\n                    <td>pg_search / Meilisearch</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Frontend</td>\r\n                    <td>Hotwire (Turbo + Stimulus)</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Testing</td>\r\n                    <td>RSpec + FactoryBot + Faker</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Deploy</td>\r\n                    <td>Kamal (Docker)</td>\r\n                  </tr>\r\n                </table>",
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
        "contentHtml": "<ul>\r\n                  <li>\r\n                    <strong\r\n                      >HTTP → URL Router → View → Form/Serializer validation →\r\n                      Service → Model/ORM → DB</strong\r\n                    >\r\n                  </li>\r\n                  <li>Django ORM: \"Active Record on steroids\"</li>\r\n                  <li>\r\n                    DRF serializers handle validation, transformation, JSON\r\n                    rendering\r\n                  </li>\r\n                  <li>\r\n                    Class-based views provide mixins (list, detail, create,\r\n                    update, delete)\r\n                  </li>\r\n                  <li>Django signals for event hooks</li>\r\n                  <li>Celery for background tasks</li>\r\n                </ul>",
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
        "contentHtml": "<p><strong>Don't use Django when:</strong> Need high concurrency and real-time features — Django's synchronous nature limits WebSocket. App is purely API-based — admin is overkill. Need maximum performance — FastAPI or Go is faster. Complex frontend interactions.</p>",
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
  }
];
