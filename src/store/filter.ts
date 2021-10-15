import { ref, computed } from "vue";
import filter, { Filter, FilterValue } from "@/data/filter";

export const filters = ref(filter);

export const filterCheckedCount = computed(() => {
  return filters.value
    .map((filter) => getCheckedValue(filter))
    .flat()
    .filter((val) => val).length;
});

function getCheckedValue(filter: Filter) {
  return filter.lists.map((value) => {
    if (value.checked) {
      return value.checked;
    }
  });
}

export const changeCheckedFilterValue = (
  value: FilterValue,
  propsName: string
) => {
  filters.value.forEach((filter) => {
    if (filter.name === propsName) {
      filter.lists.forEach((list) => {
        if (list.name === value.name) {
          list.checked = !list.checked;
        }
      });
    }
  });
};

export const ResetFilter = () => {
  filters.value.forEach((filter) => {
    filter.lists.forEach((list) => (list.checked = false));
  });
};

export const mobileFilterOption = ref(false);

export const openFilterOption = () => {
  mobileFilterOption.value = true;
  document.body.style.overflow = "hidden";
};

export const closeFilterOption = () => {
  mobileFilterOption.value = false;
  document.body.style.overflow = "auto";
};
