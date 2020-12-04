const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    let textIsPangram = isPangram(text);

    // Assert
    expect(textIsPangram).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
    let textIsPangram = isPangram(text);

    // Assert
    expect(textIsPangram).toEqual(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const textNoX = 'abcdefghijklmnopqrstuvwyz';

    // Act
    let textIsPangram = isPangram(textNoX);

    // Assert
    expect(textIsPangram).toEqual(false);
  });

  test('empty sentence', () => {
    // Arrange and Act
    let textIsPangram = isPangram("");

    // Assert
    expect(textIsPangram).toEqual(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const textNoX = 'abc_def_ghi_jkl_mno_pqr_stu_vwx_yz';

    // Act
    let textIsPangram = isPangram(textNoX);

    // Assert
    expect(textIsPangram).toEqual(true);
  });

  test('bad pangram with numbers', () => {
    // Arrange
    const textNum = '4bc_d3f_gh1_jkl_mn0_pqr_stu_vwx_yz';

    // Act
    let textIsPangram = isPangram(textNum);

    // Assert
    expect(textIsPangram).toEqual(false);
  });

  test('pangram with uppercase', () => {
    // Arrange
    const textNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Act
    let textIsPangram = isPangram(textNum);

    // Assert
    expect(textIsPangram).toEqual(true);
  });
});
