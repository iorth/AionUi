/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasePlugin } from './BasePlugin';
import { IUnifiedOutgoingMessage } from '../types';

/**
 * Abstract base class for streaming plugins that extend BasePlugin
 * Provides streaming-specific functionality and ensures consistent streaming behavior
 */
export abstract class BaseStreamingPlugin extends BasePlugin {
  /**
   * Streams a message to the client
   * This method should be called to send partial updates during streaming
   * @param chatId - The chat identifier
   * @param message - The outgoing message to stream
   * @returns Promise that resolves when the streaming message is sent
   */
  abstract streamMessage(chatId: string, message: IUnifiedOutgoingMessage, streamId: string): Promise<void>;

  /**
   * Finalizes a streaming message by sending a completion signal to the client
   * This method should be called when a streaming response is complete
   * @param chatId - The chat identifier
   * @param message - The outgoing message to finalize
   * @returns Promise that resolves when the streaming is finalized
   */
  abstract finalizeStreaming(chatId: string, message: IUnifiedOutgoingMessage, streamid: string): Promise<void>;
}