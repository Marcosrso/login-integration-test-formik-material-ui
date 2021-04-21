import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './index';

const INVALID_DATE = '00/00/0000';
const VALID_DATE = '01/01/2020';

const INVALID_CPF = '000.000.000-00';
const VALID_CPF = '379.204.030-14'; // CPF generated for testing purposes only.

describe('<Login/>', () => {
  describe('GIVEN thet i am in the sign in page', () => {
    beforeEach(() => {
      render(<LoginPage />);
    });

    describe('WHEN I have inserted a invalid CPF', () => {
      beforeEach(async () => {
        await act(async () =>
          userEvent.type(
            await screen.findByRole('textbox', { name: /^cpf$/i }),
            INVALID_CPF,
          ),
        );
      });

      describe('AND clicking forward button', () => {
        beforeEach(async () => {
          await act(async () =>
            userEvent.click(screen.getByRole('button', { name: /^entrar$/i })),
          );
        });

        test('THEN the invalid CPF error is shown', async () => {
          expect(
            await screen.findByText('Informe um CPF válido.'),
          ).toBeInTheDocument();
        });
      });
    });

    describe('WHEN I have inserted a valid CPF', () => {
      beforeEach(async () => {
        await act(async () =>
          userEvent.type(
            await screen.findByRole('textbox', { name: /^cpf$/i }),
            VALID_CPF,
          ),
        );
      });

      describe('AND clicking forward button', () => {
        beforeEach(async () => {
          await act(async () =>
            userEvent.click(screen.getByRole('button', { name: /^entrar$/i })),
          );
        });

        test('THEN the Birthday can not be blank error is shown', async () => {
          expect(
            await screen.findByText('Informe sua data de nascimento.'),
          ).toBeInTheDocument();
        });
      });

      describe('WHEN I have inserted a invalid birthday', () => {
        beforeEach(async () => {
          await act(async () =>
            userEvent.type(
              await screen.findByRole('textbox', { name: /^birthday$/i }),
              INVALID_DATE,
            ),
          );
        });

        describe('AND clicking forward button', () => {
          beforeEach(async () => {
            await act(async () =>
              userEvent.click(
                screen.getByRole('button', { name: /^entrar$/i }),
              ),
            );
          });

          test('THEN the invalid birthday error is shown', async () => {
            expect(
              await screen.findByText('Informe uma data de nascimento válida.'),
            ).toBeInTheDocument();
          });
        });
      });

      describe('WHEN I have inserted a valid birthday', () => {
        beforeEach(async () => {
          await act(async () =>
            userEvent.type(
              await screen.findByRole('textbox', { name: /^birthday$/i }),
              VALID_DATE,
            ),
          );
        });

        describe('AND clicking forward button', () => {
          beforeEach(async () => {
            window.alert = jest.fn();

            await act(async () =>
              userEvent.click(
                screen.getByRole('button', { name: /^entrar$/i }),
              ),
            );
          });

          test('THEN I should receive a notice that I have signed in', async () => {
            await waitFor(() =>
              expect(window.alert).toHaveBeenCalledWith(
                `Logged with CPF ${VALID_CPF} and birthday ${new Date(
                  2020,
                  0,
                  1,
                )}`,
              ),
            );
          });
        });
      });
    });
  });
});
