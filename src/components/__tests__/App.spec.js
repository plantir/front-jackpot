import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import App from "../../App.vue";
vi.useFakeTimers();
describe("App", () => {
  it("credit", () => {
    const wrapper = mount(App);
    expect(wrapper.vm.credit).toEqual(10);
  });

  it("useCredit", () => {
    const wrapper = mount(App);
    let credit = +wrapper.vm.credit;
    wrapper.vm.onStart();
    setTimeout(() => {
      let is_winner =
        wrapper.vm.result[0] == wrapper.vm.result[1] &&
        wrapper.vm.result[1] == wrapper.vm.result[2];
      if (!is_winner) {
        expect(wrapper.vm.credit).toEqual(credit - 1);
      } else {
        if (wrapper.vm.result[0] == "C") {
          expect(wrapper.vm.credit).toEqual(credit - 1 + 10);
        }
        if (wrapper.vm.result[0] == "L") {
          expect(wrapper.vm.credit).toEqual(credit - 1 + 20);
        }
        if (wrapper.vm.result[0] == "O") {
          expect(wrapper.vm.credit).toEqual(credit - 1 + 30);
        }
        if (wrapper.vm.result[0] == "W") {
          expect(wrapper.vm.credit).toEqual(credit - 1 + 40);
        }
      }
    }, 3001);
    vi.runAllTimers();
  });
});
