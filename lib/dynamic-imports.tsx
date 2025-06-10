'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically import Radix components with no SSR
export const dynamicRadixImport = (importPath: string) => {
  return dynamic(() => import(importPath), {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-200 rounded-md" />
    )
  })
}

// Common Radix components that can be dynamically imported
export const DynamicDialog = dynamicRadixImport('@radix-ui/react-dialog')
export const DynamicPopover = dynamicRadixImport('@radix-ui/react-popover')
export const DynamicTooltip = dynamicRadixImport('@radix-ui/react-tooltip')
export const DynamicDropdownMenu = dynamicRadixImport('@radix-ui/react-dropdown-menu')
export const DynamicSelect = dynamicRadixImport('@radix-ui/react-select')
export const DynamicTabs = dynamicRadixImport('@radix-ui/react-tabs')
export const DynamicToast = dynamicRadixImport('@radix-ui/react-toast') 