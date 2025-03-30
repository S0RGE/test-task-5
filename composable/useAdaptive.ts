import { ref, onMounted, onUnmounted, computed } from 'vue';

type DeviceBreakpoints = {
  mobile: number;
  tablet: number;
};

export const useAdaptive = () => {
  const breakpoints: DeviceBreakpoints = {
    mobile: 642,
    tablet: 1023,
  };

  const windowWidth = ref(0);

  const updateWidth = () => {
    if (typeof window === 'undefined') return;
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });

  const isMobile = computed(() => windowWidth.value <= breakpoints.mobile);
  const isTablet = computed(() => 
    windowWidth.value > breakpoints.mobile && 
    windowWidth.value <= breakpoints.tablet
  );
  const isDesktop = computed(() => windowWidth.value > breakpoints.tablet);

  return {
    isMobile,
    isTablet,
    isDesktop
  };
};