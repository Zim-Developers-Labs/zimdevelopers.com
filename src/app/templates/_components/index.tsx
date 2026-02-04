'use client';

import { useState } from 'react';
import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Search,
  Grid3X3,
  List,
  ArrowRight,
  Code2,
  Palette,
  Layout,
  ShoppingCart,
  FileText,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  MessageSquare,
  Users as UsersIcon,
  Calendar,
  Camera,
  Music,
  Gamepad2,
  Settings,
  CreditCard,
  BarChart3,
  ChevronDown,
  Box,
  X,
  PackageOpen,
} from 'lucide-react';
import { Platform, templates } from './templates';

const useCasesByPlatform: Record<
  Platform,
  { name: string; icon: typeof Grid3X3 }[]
> = {
  web: [
    { name: 'All', icon: Grid3X3 },
    { name: 'Dashboard', icon: Layout },
    { name: 'E-commerce', icon: ShoppingCart },
    { name: 'Portfolio', icon: Palette },
    { name: 'Blog', icon: FileText },
    { name: 'Marketing', icon: Zap },
    { name: 'Productivity', icon: Calendar },
    { name: 'Social', icon: UsersIcon },
  ],
  mobile: [
    { name: 'All', icon: Grid3X3 },
    { name: 'Health', icon: BarChart3 },
    { name: 'E-commerce', icon: ShoppingCart },
    { name: 'Social', icon: MessageSquare },
    { name: 'Finance', icon: CreditCard },
    { name: 'Media', icon: Camera },
    { name: 'Productivity', icon: Calendar },
  ],
  desktop: [
    { name: 'All', icon: Grid3X3 },
    { name: 'Developer Tools', icon: Code2 },
    { name: 'Media', icon: Music },
    { name: 'Productivity', icon: Calendar },
    { name: 'Utilities', icon: Settings },
    { name: 'Security', icon: Layout },
    { name: 'Gaming', icon: Gamepad2 },
  ],
};

const frameworksByPlatform: Record<Platform, string[]> = {
  web: ['All', 'Next.js', 'Astro', 'Remix', 'SvelteKit', 'Nuxt'],
  mobile: ['All', 'React Native', 'Flutter', 'Swift UI', 'Kotlin'],
  desktop: ['All', 'Electron', 'Tauri', 'Wails', 'Neutralino'],
};

const platformTabs = [
  { value: 'web' as Platform, label: 'Web', icon: Globe },
  { value: 'mobile' as Platform, label: 'Mobile', icon: Smartphone },
  { value: 'desktop' as Platform, label: 'Desktop', icon: Monitor },
];

export default function TemplatesPageComponents() {
  const [activeUseCase, setActiveUseCase] = useState('All');
  const [activeFramework, setActiveFramework] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePlatform, setActivePlatform] = useState<Platform>('web');
  const [openSection, setOpenSection] = useState<'frameworks' | 'useCases'>(
    'frameworks',
  );

  const hasActiveFilters =
    activeFramework !== 'All' || activeUseCase !== 'All' || searchQuery !== '';

  const clearAllFilters = () => {
    setActiveFramework('All');
    setActiveUseCase('All');
    setSearchQuery('');
  };

  const filteredTemplates = templates.filter((template) => {
    const matchesUseCase =
      activeUseCase === 'All' || template.useCase === activeUseCase;
    const matchesFramework =
      activeFramework === 'All' || template.framework === activeFramework;
    const matchesSearch =
      searchQuery === '' ||
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // TODO: fix this type error and remove @ts-ignore
      // @ts-ignore
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesPlatform = template.platform === activePlatform;
    return (
      matchesUseCase && matchesFramework && matchesSearch && matchesPlatform
    );
  });

  const useCases = useCasesByPlatform[activePlatform];
  const frameworks = frameworksByPlatform[activePlatform];

  const handlePlatformChange = (platform: Platform) => {
    setActivePlatform(platform);
    setActiveUseCase('All');
    setActiveFramework('All');
  };

  const groupLink = 'https://chat.whatsapp.com/FfXS39iLv7k36jrskKjOfX';

  const handleButtonClick = () => {
    window.open(groupLink, '_blank');
  };

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
        <Container className="py-6">
          <h1 className="mb-4 text-4xl font-semibold">Choose your Template</h1>

          <p className="">
            Quickstart your development with starter templates from our
            community.
          </p>
          {/* Platform Tabs */}
          <div className="mt-6 flex gap-1">
            {platformTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => handlePlatformChange(tab.value)}
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activePlatform === tab.value
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      </div>

      <Container className="py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-8 space-y-2">
              {/* Frameworks Collapsible */}
              <Collapsible
                open={openSection === 'frameworks'}
                onOpenChange={(open) =>
                  setOpenSection(open ? 'frameworks' : 'useCases')
                }
              >
                <CollapsibleTrigger className="text-foreground hover:text-foreground/80 flex w-full items-center justify-between py-2 text-sm font-medium">
                  Frameworks
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openSection === 'frameworks' ? 'rotate-180' : ''}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <nav className="mt-2 space-y-1">
                    {frameworks.map((framework) => (
                      <button
                        key={framework}
                        type="button"
                        onClick={() => setActiveFramework(framework)}
                        className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                          activeFramework === framework
                            ? 'bg-secondary text-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <Box className="h-4 w-4" />
                        {framework}
                      </button>
                    ))}
                  </nav>
                </CollapsibleContent>
              </Collapsible>

              {/* Use Cases Collapsible */}
              <Collapsible
                open={openSection === 'useCases'}
                onOpenChange={(open) =>
                  setOpenSection(open ? 'useCases' : 'frameworks')
                }
              >
                <CollapsibleTrigger className="text-foreground hover:text-foreground/80 flex w-full items-center justify-between py-2 text-sm font-medium">
                  Use Cases
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openSection === 'useCases' ? 'rotate-180' : ''}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <nav className="mt-2 space-y-1">
                    {useCases.map((useCase) => (
                      <button
                        key={useCase.name}
                        type="button"
                        onClick={() => setActiveUseCase(useCase.name)}
                        className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                          activeUseCase === useCase.name
                            ? 'bg-secondary text-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <useCase.icon className="h-4 w-4" />
                        {useCase.name}
                      </button>
                    ))}
                  </nav>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search & Filters */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="relative max-w-md flex-1">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  placeholder="Search templates..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground text-sm">Filters:</span>
                {activeFramework !== 'All' && (
                  <Badge variant="secondary" className="gap-1 pr-1">
                    {activeFramework}
                    <button
                      type="button"
                      onClick={() => setActiveFramework('All')}
                      className="hover:bg-muted-foreground/20 ml-1 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove framework filter</span>
                    </button>
                  </Badge>
                )}
                {activeUseCase !== 'All' && (
                  <Badge variant="secondary" className="gap-1 pr-1">
                    {activeUseCase}
                    <button
                      type="button"
                      onClick={() => setActiveUseCase('All')}
                      className="hover:bg-muted-foreground/20 ml-1 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove use case filter</span>
                    </button>
                  </Badge>
                )}
                {searchQuery !== '' && (
                  <Badge variant="secondary" className="gap-1 pr-1">
                    "{searchQuery}"
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="hover:bg-muted-foreground/20 ml-1 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Clear search</span>
                    </button>
                  </Badge>
                )}
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Templates Grid/List */}
            {filteredTemplates.length === 0 ? (
              <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
                <div className="bg-muted mb-4 rounded-full p-4">
                  <PackageOpen className="text-muted-foreground h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-medium">
                  No templates found
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Try adjusting your search or join the whatsapp group to
                  discuss new template ideas.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      onClick={clearAllFilters}
                      className="bg-transparent"
                    >
                      Clear filters
                    </Button>
                  )}
                  <Button onClick={handleButtonClick}>
                    Join Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className="group border-border overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <div className="bg-muted relative aspect-video">
                      <div className="text-muted-foreground absolute inset-0 flex items-center justify-center">
                        <Code2 className="h-8 w-8" />
                      </div>
                      <Badge
                        className={`absolute top-2 right-2 ${
                          template.pricing === 'free'
                            ? 'bg-emerald-500 text-white'
                            : 'bg-foreground text-background'
                        }`}
                      >
                        {template.pricing === 'free' ? 'Free' : 'Paid'}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <h3 className="text-foreground font-medium">
                        {template.name}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 text-sm">
                        {template.description}
                      </p>
                    </CardHeader>
                    <CardFooter className="flex flex-col items-start gap-3 pt-0">
                      {template.tags && template.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {template.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <Button size="sm" variant="ghost" className="-ml-2 gap-1">
                        View <ArrowRight className="h-3 w-3" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {filteredTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className="group border-border overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-4 p-4">
                      <div className="bg-muted text-muted-foreground flex h-16 w-24 shrink-0 items-center justify-center rounded-md">
                        <Code2 className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-foreground font-medium">
                            {template.name}
                          </h3>
                          <Badge
                            className={`text-xs ${
                              template.pricing === 'free'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-foreground text-background'
                            }`}
                          >
                            {template.pricing === 'free' ? 'Free' : 'Paid'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mt-1 line-clamp-1 text-sm">
                          {template.description}
                        </p>
                        {template.tags && template.tags.length > 0 && (
                          <div className="mt-2 flex flex-wrap items-center gap-1.5">
                            {template.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs font-normal"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="shrink-0 gap-1 bg-transparent"
                      >
                        View <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
